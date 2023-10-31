<script lang="ts">
import { calColors, calculateCssVars, type CalColors } from "$lib/stores/styles";
import { createEventDispatcher } from "svelte";

export let active = false;
export let styleChoice: keyof CalColors = "0"

const dispatch = createEventDispatcher();

$: styles = calculateCssVars(styleChoice, $calColors);
</script>

<button style={styles} class:active class:inactive={!active}
on:click={() => dispatch("click")}>

<slot />

</button>

<style lang="postcss">
button {
    @apply py-2 px-1 rounded-md;
}

button:active {
    @apply transform scale-95;
}

.active {
    background-color: var(--bg);
    color: var(--text);
}

.active:hover {
    background-color: var(--bg-hover);
    @apply duration-150;
}

.inactive {
    @apply bg-slate-100 dark:bg-slate-800
    hover:bg-slate-200 dark:hover:bg-slate-700;
}
</style>