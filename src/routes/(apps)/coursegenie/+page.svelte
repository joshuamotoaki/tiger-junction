<script lang='ts'>
import Kanban from "./Kanban.svelte";
import Requirements from "./Requirements.svelte";
import Search from "./Search.svelte";


</script>

<svelte:head>
    <title>TigerJunction | CourseGenie</title>
</svelte:head>

<main class="flex flex-col flex-1 w-full max-w-[1500px] mx-auto
dark:bg-black max-h-screen overflow-clip">
    <div id="search">
        <Search />
    </div>
    <div id="kanban">
        <Kanban />
    </div>
    <div id="requirements">
        <Requirements />
    </div>
</main>