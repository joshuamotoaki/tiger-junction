<script lang="ts">
import { calculateCssVars, calColors } from "$lib/stores/styles";

$: style = calculateCssVars("0", $calColors);
</script>

<div id="header" {style} class="h-12 rounded-md mt-2 flex items-center
px-4">
    <h1 class="text-2xl font-medium">
        Welcome to TigerJunction!
    </h1>
</div>

<style lang="postcss">
#header {
    background-color: var(--bg);
    color: var(--text);
}
</style>