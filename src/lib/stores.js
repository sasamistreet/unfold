import { writable, derived } from 'svelte/store';

export const current = writable(1);
export const steps = derived(current, $current => [$current-2, $current-1, $current, $current+1, $current+2]);
export const layout = "h-3";