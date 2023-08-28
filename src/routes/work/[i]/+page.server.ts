import { supabase } from "$lib/server/supabaseClient";

async function getWork(workId){
    const{ data, error } = await supabase.from("Work").select().eq('id', workId).single();
    return data;
}

async function getSteps(workId){
    const{ data, error } = await supabase.from("Step").select().eq('workId', workId).order('step', { ascending: true });
    return data;
}

async function getCurrent(workId, steps){
    const{ data, error } = await supabase.from("Step").select().eq('workId', workId).filter('step', 'in', steps).order('step', { ascending: true });
    console.log(data);
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


export async function load({ locals, params }) {
    try {
        const work = getWork(params.i);
        //const steps = getSteps(params.i);
        const steps = getCurrent(params.i, "(1,2,3,4,5)");
        //const path = work.featured_image;
        const featured = getFeatured("work/Apple_logo_black.svg")
        return {work, steps, featured};
    } catch (error) {

    }
}