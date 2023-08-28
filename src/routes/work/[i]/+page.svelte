<script>
	import Dviewer from './Dviewer.svelte';
	//import { current, steps } from '$lib/stores.js';
	let name = 'Title';
	let totalstep = 123;
	import UIkit from 'uikit';
	UIkit.grid();
	UIkit.accordion();
	export let currentSteps = [1,2,3,4,5];
	//これをサーバーに投げることはできるか？
	export let data;
	$: ({ work, steps, featured } = data);
</script>
<Dviewer steps={steps}></Dviewer>
{#each steps as step }
	<div>{step.figure_svg_path}</div>
{/each}
<div class="model-information uk-padding-large">
    <div class="uk-container uk-container-xsmall">
        <div class="uk-child-width-expand@s modelgrid" uk-grid>
            <div>
                <figure>
					<img src="{featured.publicUrl}" alt="" >
				</figure>
            </div>
            <div>
				<h1 class="uk-margin-small">{work.title}</h1>
                <div><span class="author">by author</span></div>
				<div><span class="uk-badge uk-background-secondary">complex</span></div>
				<span uk-icon="icon: star"></span><span uk-icon="icon: star"></span><span uk-icon="icon: star"></span>
				<div class="pricebox uk-margin uk-flex uk-flex-column">
					<div class="salebox uk-alert uk-alert-danger uk-margin-remove uk-text-center"><div class="uk-text-bold">50%OFF</div><span class="uk-text-small">Xmas sale! until7.7</span></div>
					
					<div class="uk-flex uk-flex-around uk-flex-middle uk-background-muted  uk-padding-small">
						
						<div class="uk-text-success"><span class="uk-text-muted uk-text-small"><s>¥20,000</s></span> ¥10,000</div>
						<button class="uk-button uk-background-secondary"><span uk-icon="icon: cart"></span> Purchase</button>
					</div>
				</div>
				<div class="openbox uk-margin uk-flex uk-flex-column  uk-background-muted  uk-padding-small">
					<button class="uk-button uk-button-primary uk-margin"><span uk-icon="icon: download"></span> Open Viewer</button>
					<button class="uk-button uk-button-default"><span uk-icon="icon: file-pdf"></span> PDF Download</button>
				</div>
				
				<div class="uk-margin">
					<ul class="uk-list uk-text-small">
						<li><span class="uk-text-uppercase uk-text-muted">format: </span>Diagrams</li>
						<li><span class="uk-text-uppercase uk-text-muted">steps: </span>{totalstep}</li>
						<li><span class="uk-text-uppercase uk-text-muted">Paper: </span>one sheet</li>
						<li><span class="uk-text-uppercase uk-text-muted">tools: </span>scissors, glue</li>
					</ul>
					<div class="uk-padding-small uk-background-muted uk-text-small uk-hidden">
						<dl class="uk-description-list uk-flex uk-grid-collapse" uk-grid>
							<dt class="uk-width-1-5 uk-margin-remove">format</dt><dd class="uk-width-4-5">Diagrams</dd>
							<dt class="uk-width-1-5 uk-margin-remove">steps</dt><dd class="uk-width-4-5">{totalstep}</dd>
							<dt class="uk-width-1-5 uk-margin-small-top">Paper</dt><dd class="uk-width-4-5 uk-margin-small-top">one sheet</dd>
							<dt class="uk-width-1-5 uk-margin-small-top">tools</dt><dd class="uk-width-4-5 uk-margin-small-top">scissors, glue</dd>
						</dl>
					</div>
					<p>This is description.</p>
					<div class="uk-text-small">2025.02.05</div>
					<div><span class="uk-label uk-background-muted uk-dark">Tag</span> <span class="uk-label">Tag</span> <span class="uk-label">Tag</span></div>
				</div>
				<hr>
				<h4>Licenses</h4>
				<ul class="uk-text-small" uk-accordion="multiple: true">
					<li>
						<a class="uk-accordion-title uk-text-small uk-open" href="/">Copy</a>
						<div class="uk-accordion-content">
							<table class="uk-table uk-table-small">
								<tbody>
									<tr>
										<td>Personal Copy</td>
										<td>OK</td>
									</tr>
									<tr>
										<td>Personal Copy & Share</td>
										<td>Need Contact</td>
									</tr>
									<tr>
										<td>Sell Copied Product</td>
										<td>NO</td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>
					<li>
						<a class="uk-accordion-title uk-text-small" href="/">Class</a>
						<div class="uk-accordion-content">
							<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
						</div>
					</li>
				</ul>
            </div>
        </div>
    </div>
</div>
<div class="contents">
	<div class="advertice uk-padding-small uk-padding-remove-top">
		advertice
	</div>
	<div class="community">
		<ul class="uk-subnav">
			<li><span>Reviews</span></li>
			<li><span>Photos</span></li>
			<li><span>Stats</span></li>
		</ul>
		<form>
			<textarea class="uk-textarea" rows="2" placeholder="Textarea" aria-label="Textarea"></textarea>
		</form>
		<ul class="uk-comment-list current-comments">
				<li>
						<article class="uk-comment">This step is Difficult.</article>
						<ul>
								<li>
										<article class="uk-comment">Sorry.</article>
								</li>
						</ul>
				</li>
		</ul>
	</div>
	<div class="related-contents uk-padding-small uk-padding-remove-top">
		<ul>
			<li></li>
		</ul>
	</div>
</div>
<style>
	h1{
		font-size:1.2rem;
	}
	.author{
		font-size:0.8rem;
	}
    .model-information{
		background-color:#ffffff;
    }
	.salebox{

	}
	.contents{
		display:flex;
		justify-content: center;
	}
	.related-contents, .advertice{
		flex-basis: min-content;
		flex-grow:1;
	}
	.community{
		min-width:50%;
		flex-basis:400px;
		flex-grow:1;
		box-sizing: border-box;
		padding:20px;
		font-size:.8rem;
		background:#f7f7f7;
	}
	.uk-comment{
		font-size:0.8rem;
	}
</style>