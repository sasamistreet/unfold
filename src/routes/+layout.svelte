<script>
	import Header from './Header.svelte';
	import { onMount } from 'svelte';
    import '../../node_modules/uikit/dist/css/uikit.unfold.min.css';
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