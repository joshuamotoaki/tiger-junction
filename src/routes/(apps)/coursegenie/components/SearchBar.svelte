<script lang="ts">

let inputBar: HTMLInputElement;

const triggerSearch = () => {

}
</script>

<input type="text" placeholder="Search" 
class="search-input std-area rounded-md" bind:this={inputBar}
on:input={triggerSearch}>

<style lang="postcss">
.search-input {
    @apply flex-1 p-2 h-10 w-full
}

</style>