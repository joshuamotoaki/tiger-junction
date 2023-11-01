<script lang="ts">
import { calculateCssVars, type CalColors, calColors } from "$lib/stores/styles";

export let scheme: keyof CalColors = "0";
$: style = calculateCssVars(scheme, $calColors);
</script>

<div id="header" {style} class="h-12 rounded-md mt-2 flex items-center
px-4">
    <h1 class="text-2xl font-bold">
        Welcome to TigerJunction!
    </h1>
</div>

<style lang="postcss">
#header {
    background-color: var(--bg);
    color: var(--text);
}
</style>