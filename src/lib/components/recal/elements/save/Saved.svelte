<script lang="ts">
import { currentSchedule, isResult, ready, recal, searchSettings } from "$lib/stores/recal";
import type { SupabaseClient } from "@supabase/supabase-js";
// import ClassicSearch from "../cards/ClassicSearch.svelte";
import MinimalBase from "../cards/MinimalBase.svelte";
import { pinnedCourses, savedCourses } from "$lib/stores/rpool";
import { calColors } from "$lib/stores/styles";
    import Loader from "$lib/components/elements/Loader.svelte";
    import { modalStore } from "$lib/stores/modal";

export let supabase: SupabaseClient;

$: saved = $savedCourses[$currentSchedule] ? 
    $savedCourses[$currentSchedule].sort((a, b) => a.code.localeCompare(b.code))
    : [];
$: pinned = $pinnedCourses[$currentSchedule] ?
    $pinnedCourses[$currentSchedule].sort((a, b) => a.code.localeCompare(b.code))
    : [];

$: colorChange = $calColors;
</script>


{#key saved && $recal}
{#if saved && $ready}
<div class="max-h-full mt-2">
    <div class="text-base font-normal dark:text-zinc-100 ml-1
    flex items-center justify-between">
        <span>
            {saved.length} Saved 
            {saved.length === 1 ? "Course" : "Courses"}
            {#if pinned.length > 0}
            ({pinned.length} Pin{pinned.length === 1 ? "" : "s"})
            {/if}   
        </span>
        <button on:click={() => modalStore.open("exportCal", { clear: true})}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
            class="w-5 h-5 calbut">
                <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
            </svg>                
        </button>
    </div> 

    {#if saved.length > 0}
    <div class="flex flex-col overflow-hidden rounded-sm
    {$isResult ? "max-h-[18vh]" : "max-h-[75vh]"}">
        <div class="overflow-y-auto">
            {#key saved && colorChange}
            {#each saved as course}
                {#if $searchSettings.style["Original Style"]}
                    <!-- <ClassicSearch {course} /> -->
                {:else}
                    <MinimalBase {supabase} {course} category="saved" />
                {/if}
            {/each}
            {/key}
        </div>
    </div> 
    {/if}
</div>
{:else}
    <div class="flex items-center gap-2 mt-2">
        <Loader />
        <span>
            Loading...
        </span>
    </div>
{/if}
{/key}

<style lang="postcss">
.calbut {
    @apply dark:text-zinc-100;
}

.calbut:hover {
    @apply text-zinc-600 duration-150 dark:text-zinc-300;
}
</style>