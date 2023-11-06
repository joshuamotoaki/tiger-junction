import { REDIS_PASSWORD } from "$env/static/private";
import { checkAdmin } from "$lib/supabase";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { RequestHandler } from "@sveltejs/kit";
import { createClient } from "redis";

export const GET: RequestHandler = async (req) => {
  let supabase: SupabaseClient = req.locals.supabase;
  if (!await checkAdmin(supabase)) throw new Error("User not admin");

  // Fetch term data from Supabase
  const { data: supaListings, error: error2 } = await req.locals.supabase
    .from("listings")
    .select("*")
    .order("code", { ascending: true });

  if (error2) {
    throw new Error(error2.message);
  }

  // Push term data to Redis
  const redisClient = createClient({
    password: REDIS_PASSWORD,
    socket: {
      host: 'redis-10705.c12.us-east-1-4.ec2.cloud.redislabs.com',
      port: 10705
    }
  });

  redisClient.on("error", err => console.log("Redis Client Error", err));

  await redisClient.connect();
  await redisClient.json.set(`listings`, "$", supaListings)
  await redisClient.disconnect();

  return new Response(JSON.stringify("Transferred listings to Redis"));
};