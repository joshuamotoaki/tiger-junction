<script lang='ts'>
import ModalLib from "$lib/components/general/ModalLib.svelte";
import Sidebar from "$lib/components/sidebar/Sidebar.svelte";
import { isMobile } from "$lib/stores/mobile";

export let data;
$: currentApp = data.currentApp || "";
</script>

<ModalLib supabase={data.supabase} />
<div class="h-screen w-screen flex flex-col sm:flex-row 
bg-white dark:bg-black">
    {#if !$isMobile}
    <div class="my-2">
        <Sidebar {currentApp} supabase={data.supabase} />
    </div>
    <slot />
    {:else}
    <slot />
    <div class="px-2 pb-2">
        <Sidebar supabase={data.supabase} />
    </div>
    {/if}
</div>