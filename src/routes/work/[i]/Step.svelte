<script>
    import { onMount, getContext, tick } from 'svelte';
    import { current, totalstep } from '$lib/stores';
    import UIkit from 'uikit';
	UIkit.tooltip();
	import Icons from 'uikit/dist/js/uikit-icons';
	UIkit.use(Icons);
    export let step = 1;
    const work = getContext('work');
    let stepData = {};
    let rootUrl = ""; 

    onMount(async() => {
		stepData = await fetch(`/api/steps?work=${work}&step=${step}`).then( res => res.json() );
        //await tick();
        rootUrl = await fetch(`/api/storage?path=${stepData.figure_svg_path}`).then( res => res.json() );
	});
</script>
    {#if $current == stepData.step}
    <div class="steptools uk-flex uk-flex-between uk-width-1-1 uk-padding-small">
        <div class="uk-align-left">
            <span data-uk-icon="expand"></span>
            <span data-uk-icon="shrink"></span>
            <span data-uk-icon="refresh"></span>
        </div>
        <div class="uk-align-right">
            <span data-uk-icon="image"></span>
            <span data-uk-icon="play-circle"></span>
        </div>
    </div>
    {/if}
    <img src ="{rootUrl.publicUrl}" alt="My Happy SVG"  width="50" height="50"/>
    
    {#if $current == stepData.step}
    <div class="stepinfo">
        <div class="number">
            <span class="current-number uk-width-1-6">{$current}</span>/{totalstep}
        </div>
        <p class="description uk-width-expand">
            this is description.
        </p>
        <div class="buttons uk-width-1-6">
            <span class="uk-margin-small-right" data-uk-icon="comments"></span>6
        </div>
    </div>
    {/if}

<style>
    .steptools{
		position:absolute;
		left:0;
		top:0;
	}
	.stepinfo{
		position:absolute;
		left:0;
		bottom:0;
		background:linear-gradient(0deg, rgba(0,0,0,0.08), rgba(0,0,0,0));
		width:100%;
		padding:5px 20px;
		min-height:40px;
		display:flex;
		flex-direction: row;
		align-items: baseline;
		gap:20px;
	}
	.number{
		font-size:0.8rem;
	}
	.current-number{
		font-size:1.6rem;
	}
	.description{
		font-size:0.8rem;
	}
	
</style>