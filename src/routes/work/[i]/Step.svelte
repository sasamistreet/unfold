<script>
    import { onMount, onDestroy, getContext } from 'svelte';
    import { current } from '$lib/stores';
    import UIkit from 'uikit';
	UIkit.tooltip();
	import Icons from 'uikit/dist/js/uikit-icons';
	UIkit.use(Icons);
    export let step = 1;
    const work = getContext('info').work;
    const totalstep = getContext('info').totalstep;
    let stepData = {};
    let rootUrl = ""; 
    let width = 100;

    onMount(async() => {
        if ( step > 0 && step <= totalstep ){
            stepData = await fetch(`/api/steps?work=${work}&step=${step}`).then( res => res.json() );
        } else {
            stepData = await fetch(`/api/steps?work=1&step=1`).then( res => res.json() );
        }
        rootUrl = await fetch(`/api/storage?path=${stepData.figure_svg_path}`).then( res => res.json() );
	});

    onDestroy(() => {
	});

    function expand() {
        width = 300;
    }

    function shrink () {

    }

    function reset () {
        width = 200;
    }
    
    function handleDrag(e){

    }

    function dragStart(){
        console.log('drag start');
    }

    let left = 50;
	let top = 50

    let moving = false;
    let item;
	
	function onMouseDown() {
        moving = true;
        console.log(moving);
	}

    function onMouseMove(e) {
        if (moving) {
            left += e.movementX;
            top += e.movementY;
        }
	}
    
    function onMouseUp() {
        moving = false;
        console.log(moving);
	}
	
	
</script>
<svelte:window on:mousemove={onMouseMove}  on:mouseup={onMouseUp} ></svelte:window>
    <div class="viewBox">
        <img bind:this={item} class:moving on:mousedown={onMouseDown} src="{rootUrl.publicUrl}" class="media" height="{width}" width="{width}" alt=""/>
        <!--<object draggable="true"  on:mousedown={onMouseDown} style="left: {left}px; top: {top}px;"  role="figure" aria-label="" title="" type="image/svg+xml" data="{rootUrl.publicUrl}" class="media" height="{width}" width="{width}"></object>-->
    </div>
    {#if $current == stepData.step}
    <div class="steptools uk-flex uk-flex-between uk-width-1-1 uk-padding-small">
        <div class="uk-align-left">
            <button on:click={expand}><span data-uk-icon="expand"></span></button>
            <button on:click={shrink}><span data-uk-icon="shrink"></span></button>
            <button on:click={reset}><span data-uk-icon="refresh"></span></button>
        </div>
        <div class="uk-align-right">
            <span data-uk-icon="image"></span>
            <span data-uk-icon="play-circle"></span>
        </div>
    </div>
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
    .viewBox{
        height:100%;
        width:100%;
        margin:0;
        overflow: hidden;
        position:relative;
    }
    .media{

        position: absolute;
        cursor: move;
        user-select: none;
    }
    .steptools{
		position:absolute;
		left:0;
		top:0;
	}
    .steptools button {
        border: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
        background: none;
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