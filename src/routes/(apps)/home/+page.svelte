<script lang="ts">
import { goto } from "$app/navigation";
import { EMAIL_LIST_FORM_LINK } from "$lib/constants";
import { calColors } from "$lib/stores/styles";
import AppCard from "./AppCard.svelte";
import Header from "./Header.svelte";

</script>

<svelte:head>
    <title>TigerJunction</title>
</svelte:head>

<div class="h-screen flex flex-col flex-1 max-w-[1400px] mx-auto
bg-white dark:bg-black max-h-screen overflow-clip">

    <!-- * Header -->
    <Header scheme="0" />

    <!-- * App Card Link Buttons -->
    <div class="flex h-20 gap-4 mt-2">
        <!-- ReCal+ -->
        <AppCard on:click={() => goto("/recalplus")}
        scheme="5">
            <div class="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>          
                <h1>ReCal+</h1>
            </div>
        </AppCard>


        <!-- CourseGenie -->
        <AppCard on:click={() => goto("/coursegenie")}
        scheme="2">
            <div class="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>                         
                <h1>Course Genie</h1>
            </div>
        </AppCard>

        <!-- ReqTree -->
        <AppCard on:click={() => goto("/reqtree")}
        scheme="1">
            <div class="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>                     
                <h1>ReqTree</h1>
            </div>
        </AppCard>
    </div>

    <div class="flex-1">

    </div>
    <!-- * Info -->
    <div class="w-full h-12 bg-red-500 rounded-md flex items-center
    justify-between px-4 mb-2 shadow-md">
        <div class="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 hidden md:block">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>                  
            Join our emailing list to receive updates about
            TigerJunction feature releases and other news!
        </div>
        <a href={EMAIL_LIST_FORM_LINK} target="_blank">
            <button class="btn btn-green">
                Get Updated
            </button>
        </a>
    </div>
    

</div>

<style lang='postcss'>
.card {
    @apply p-8 rounded-lg shadow-lg;
}

.card h1 {
    @apply font-bold text-2xl mb-2;
}

</style>