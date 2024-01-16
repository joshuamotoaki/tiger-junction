<script lang="ts">
import { goto } from "$app/navigation";
import { calColors, calculateCssVars } from "$lib/stores/styles";
import type { SupabaseClient } from "@supabase/supabase-js";
import { darkTheme } from "$lib/stores/state";
import { modalStore } from "$lib/stores/modal";
import { isMobile } from "$lib/stores/mobile";
import { getContext, onMount } from "svelte";
import { currentPage } from "$lib/stores/state";
    import { fade } from "svelte/transition";

let supabase: SupabaseClient = getContext("supabase");

const handleLogout = async () => {
    await supabase.auth.signOut();
    goto("/");
}

$: cssVarStyles = calculateCssVars("0", $calColors);

let dropdownOpen = false;
onMount(() => {
    const handleOutsideClick = (e: MouseEvent) => {
        if (dropdownOpen) {
            const target = e.target as HTMLElement;
            if (!target.closest("#dropdown")) {
                dropdownOpen = false;
            }
        }
    }

    window.addEventListener("click", handleOutsideClick);

    return () => {
        window.removeEventListener("click", handleOutsideClick);
    }
})
</script>

<nav class="w-screen h-10 mb-2 border-b-[1px]
dark:border-zinc-700 border-zinc-200" style={cssVarStyles}>
    <div class="flex justify-between items-center px-4">
        <div id="left">
            <div class="flex items-center">
                <img src="tjlogolarge.png" alt="Tiger Junction logo"
                class="w-10 h-10">
                <span class="text-xl dark:text-zinc-100">TigerJunction</span>
            </div>
        </div>

        <div id="right" class="sm:space-x-6 space-x-4 flex items-center">
            <button on:click={() => $darkTheme = !$darkTheme}
                class="btn-circ">
                    {#if $darkTheme}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    class="btn-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>                      
                    {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    class="btn-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>                      
                    {/if}
            </button>

            <button class="btn-circ"
            on:click={() => modalStore.open("rcolors", { clear: true})}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            class="btn-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
              </svg>
            {#if !$isMobile}
                Theme    
            {/if}
            </button>

            <div id="app-selector" class="bg-zinc-200 dark:bg-zinc-800 text-zinc-900
            dark:text-zinc-100 flex rounded-sm gap-2 items-center">
                <button 
                on:click={() => {
                    currentPage.set("recalplus");
                    goto("/recalplus");
                }}>
                    ReCal+
                </button>
                <button
                on:click={() => {
                    currentPage.set("courseGenie");
                    goto("/coursegenie");
                }}>
                    CourseGenie
                </button>
                <button
                on:click={() => {
                    currentPage.set("reqtree");
                    goto("/reqtree");
                }}>
                    ReqTree
                </button>      
                
                <div id="dropdown" class="relative inline-block">
                    <div class="flex items-center">
                        <button
                        on:click={() => {
                            dropdownOpen = !dropdownOpen;
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>                      
                        </button>
                    </div>
                    {#if dropdownOpen}
                        <div id="dropdownOpen" transition:fade={{ duration: 100 }}
                        class="bg-slate-200 absolute">
                            <button on:click={handleLogout}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                class="btn-icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                                Logout
                            </button>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</nav>

<style lang="postcss">
.btn-circ {
    @apply flex items-center gap-1 dark:text-zinc-100;
}

.btn-circ:hover {
    @apply text-zinc-600 dark:text-zinc-300 duration-150;
}


.btn-icon {
    @apply w-5 h-5;
}
</style>