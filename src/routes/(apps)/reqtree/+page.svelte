<script lang='ts'>
    import Board from "./Board.svelte";

    
</script>

<svelte:head>
    <title>TigerJunction | CourseGenie</title>
</svelte:head>

<main class="flex flex-col flex-1 w-full max-w-[1500px] mx-auto
dark:bg-black max-h-screen overflow-clip">
    <div id="search">
        
    </div>
    <div id="board">
        <Board />
    </div>
    <div id="requirements">
        
    </div>
</main>