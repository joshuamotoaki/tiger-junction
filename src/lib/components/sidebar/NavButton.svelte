<script lang="ts">
import { createEventDispatcher } from "svelte";

export let styles: string = "";

const dispatch = createEventDispatcher();
console.log(styles);
</script>

<button style={styles}
on:click={() => {
    dispatch("click");
}}>

<slot />

</button>

<style lang="postcss">
button {
    @apply py-2 px-1 rounded-md;
    background-color: var(--bg);
    color: var(--text);
}
</style>