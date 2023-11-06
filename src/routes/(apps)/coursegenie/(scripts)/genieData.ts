import type { Listing } from "$lib/types/dbTypes";
import { writable, type Writable } from "svelte/store";

export const listings: Writable<Listing[]> = writable([]);

export const listingSearchResults: Writable<Listing[]> = writable([]);

export type Plan = {
    id: number,
    title: string,
    saves: {
        0: Listing[],
        1: Listing[],
        2: Listing[],
        3: Listing[],
        4: Listing[]
        5: Listing[],
        6: Listing[],
        7: Listing[],
    }
}

export const plans: Writable<Plan[]> = writable([]);
