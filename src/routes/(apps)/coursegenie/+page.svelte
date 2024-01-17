<script lang='ts'>
import Kanban from "./Kanban.svelte";
import Requirements from "./Requirements.svelte";
import Search from "./Search.svelte";


</script>

<svelte:head>
    <title>TigerJunction | CourseGenie</title>
</svelte:head>

<main class="flex flex-1 w-full max-w-[1600px] mx-auto
dark:bg-black max-h-screen overflow-clip bg-yellow-200">
    <div id="search" class="bg-blue-500 h-full w-64">
        <Search />
    </div>
    <div id="kanban" class="bg-red-500 h-full flex-1">
        <Kanban />
    </div>
    <div id="requirements" class="bg-green-500 h-full w-64">
        <Requirements />
    </div>
</main>