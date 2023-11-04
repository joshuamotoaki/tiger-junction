<script lang='ts'>
import ModalLib from "$lib/components/general/ModalLib.svelte";
import { bgColors } from "$lib/stores/styles.js";

$: style = bgColors.getString($bgColors);

export let data;
</script>

<ModalLib supabase={data.supabase} />
<div class="h-screen w-screen flex bg-std" {style}>
    <slot />
</div>

<style lang="postcss" global>
:is(.dark div) {
    background-color: var(--bg-dark);
    color: var(--text-dark);
    border-color: var(--border-dark);
    outline-color: var(--border-dark);
}

div {
    background-color: var(--bg-light);
    color: var(--text-light);
    border-color: var(--border-light);
    outline-color: var(--border-light);
}
</style>