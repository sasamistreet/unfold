<script lang="ts">
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte';
	import Header from './Header.svelte';
    import '../../node_modules/uikit/dist/css/uikit.min.css';
	//import '$lib/unfold.css';

</script>
<div class="app">
    <Header />
	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>