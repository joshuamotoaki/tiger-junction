import type { Listing } from "$lib/types/dbTypes";
import { writable, type Writable } from "svelte/store";

export const listings: Writable<Listing[]> = writable([])