import { writable, derived } from 'svelte/store';
//import { json } from '@sveltejs/kit';

export const current = writable(3);
export const currentSteps: number[] = derived(current, $current => [$current-2, $current-1, $current, $current+1, $current+2]);
export const layout = "h-3";
export const totalstep = writable(24);
export const moving = writable(false);
