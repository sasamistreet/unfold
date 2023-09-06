import { supabase } from "$lib/server/supabaseClient";
import type { PageServerLoad } from './$types';
import { current, stepNums } from '$lib/stores';

async function getWork(workId){
    const{ data, error } = await supabase.from("Work").select().eq('id', workId).single();
    return data;
}

async function getSingleStep(workId, s){
    const{ data, error } = await supabase.from("Step").select().match({ workId: workId, step: 2 }).single();
    return data;
}

async function getAllSteps(workId){
    const{ data, error } = await supabase.from("Step").select().eq('workId', workId).order('step', { ascending: true });
    //console.log(data);
    return data;
}

async function getCurrent(workId, steps){
    const{ data, error } = await supabase.from("Step").select().eq('workId', workId).in('step', [1,2,3]).order('step', { ascending: true });
    return data;
}

async function getFeatured(path:string){
    //private bucket
    /*const { data, error } = await supabase.storage.from('steps').download(path);
    //if (data === null) return;
    console.log(data);
    const url = URL.createObjectURL(data);
    */
   //public bucket
    const { data } = await supabase.storage.from('works').getPublicUrl(path);
    return data;
}


export const load = (async ({ locals, params }) => {
    try {
        const work = getWork(params.i);
        //const stepData = getSteps(params.i);
        //let steps = getContext('steps');
        //const step = getSingleStep(params.i, 5);
        //const stepData = getCurrent(params.i, [1,2,3]);
        const allSteps = getAllSteps(params.i);
        const featured = getFeatured("work/Apple_logo_black.svg")
        return {work, allSteps, featured};
    } catch (error) {

    }
})  satisfies PageServerLoad;