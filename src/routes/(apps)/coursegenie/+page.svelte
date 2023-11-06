<script lang='ts'>
import { onMount } from "svelte";
import type { PageData } from "./$types";
import Main from "./Main.svelte";
import Top from "./Top.svelte";
import { get } from "svelte/store";
import { listings } from "./(scripts)/listingData";
import type { Listing } from "$lib/types/dbTypes";

export let data: PageData;

onMount(async () => {
    if (get(listings).length === 0) {
        const rawListings = await fetch("/api/client/listings");
        let jsonListings: Listing[] = await rawListings.json();
        listings.set(jsonListings);
    }
});
</script>

<svelte:head>
    <title>TigerJunction | CourseGenie</title>
</svelte:head>

<div class="h-screen flex flex-col flex-1 max-w-[1400px] mx-auto
bg-white dark:bg-black max-h-screen overflow-clip">
    <div class="mx-2">
        <Top supabase={data.supabase} />
    </div>
    <!-- Fills bottom area does not cause page scroll -->
    <div id="main" class="flex flex-1 m-2 max-h-[calc(100vh-80px)]">
        <Main supabase={data.supabase} />
    </div>
</div>

<style lang='postcss'>

</style>