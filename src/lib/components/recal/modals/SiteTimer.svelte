<script lang="ts">
import StdModal from "$lib/components/elements/StdModal.svelte";
import { writable, type Writable } from "svelte/store";

export let showModal: boolean = false;

let timerInput: number = 0;
let inputFocused: boolean = false;

const siteTimer: Writable<number> = writable(0);


const inputToTimerString = (input: number): string => {
    const minutes: number = Math.floor(input / 60);
    const seconds: number = input % 60;

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
</script>

<StdModal title="Timer" stdClose={true} {showModal}>
    <div slot="main">
        <h2>{inputToTimerString(timerInput)}</h2>

        <input type="text" bind:value={timerInput}>
    </div>
</StdModal>