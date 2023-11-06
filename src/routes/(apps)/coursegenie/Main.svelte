<script lang="ts">
import type { SupabaseClient } from "@supabase/supabase-js";
import Search from "./(components)/Search.svelte";
import Kanban from "./(components)/Kanban.svelte";
import Requirements from "./(components)/Requirements.svelte";

export let supabase: SupabaseClient;
</script>

<div class="w-full h-full flex gap-2">
    <div class="w-1/6 min-w-[200px] h-full">
        <Search {supabase} />
    </div>
    <div class="h-full w-full flex-1">
        <Kanban {supabase} />
    </div>
    <div class="w-1/6 min-w-[200px] h-full">
        <Requirements {supabase} />
    </div>
</div>

<style lang="postcss">
    
</style>