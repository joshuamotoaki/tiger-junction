<script lang="ts">
import StdModal from "../elements/StdModal.svelte";

export let showModal: boolean = false;

</script>

<StdModal title="Settings" stdClose={true} {showModal}>

</StdModal>