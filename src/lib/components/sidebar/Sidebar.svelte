<script lang="ts">
import { calColors, calculateCssVars } from "$lib/stores/styles";
import NavButton from "./NavButton.svelte";


$: cssVarStyles = calculateCssVars("0", $calColors);
</script>

<nav style={cssVarStyles} 
class="sm:h-full sm:w-12 sm:ml-2 flex sm:flex-col flex-row
h-12 w-full items-center pt-1
bg-white dark:bg-slate-900 text-slate-900
dark:text-white border-2 border-slate-600/30
dark:border-slate-200/60 rounded-xl overflow-clip">

<img src="tjlogolarge.png" alt="Tiger Junction Logo"
class="w-10 h-10">

<div>
    <NavButton styles={cssVarStyles}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
    </NavButton>
</div>

</nav>

<style lang="postcss">

</style>