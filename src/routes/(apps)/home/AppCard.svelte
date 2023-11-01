<script lang="ts">
import { calColors, calculateCssVars, type CalColors } from "$lib/stores/styles";
import { createEventDispatcher } from "svelte";

export let scheme: keyof CalColors = "0";

const dispatch = createEventDispatcher();

$: style = calculateCssVars(scheme, $calColors);
</script>

<button {style} on:click={() => dispatch("click")}>
    <slot />
</button>

<style lang='postcss'>
button {
    background-color: var(--bg);
    color: var(--text);
    @apply flex-1 rounded-md py-2 px-1 shadow-md hover:shadow-lg
    text-2xl font-medium;
}

button:hover {
    background-color: var(--bg-hover);
    transition-duration: 150ms;
}

button:active {
    transform: scale(0.95);
}
</style>