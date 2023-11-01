<script lang="ts">
import { calColors, calculateCssVars } from "$lib/stores/styles";
import { EMAIL_LIST_FORM_LINK } from "$lib/constants";

$: style = calculateCssVars("-1", $calColors);
$: buttonStyle = calculateCssVars("0", $calColors);
</script>

<div id="parent" {style} class="w-full h-16
rounded-md flex items-center text-lg py-2
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
        <button style={buttonStyle}>
            Get Updated
        </button>
    </a>
</div>

<style lang="postcss">
#parent {
    background-color: var(--bg);
    color: var(--text);
}

button {
    background-color: var(--bg);
    color: var(--text);
    @apply rounded-md p-2;
}

button:hover {
    background-color: var(--bg-hover);
    transition-duration: 150ms;
}

button:active {
    transform: scale(0.95);
}
</style>