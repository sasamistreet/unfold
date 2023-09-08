import { supabase } from "$lib/server/supabaseClient";
import type { PageServerLoad } from './$types';

async function getWork(workId){
    const{ data, error } = await supabase.from("Work").select().eq('id', workId).single();
    return data;
}

async function getStorage(){
    const { data } = await supabase.storage.from('works').getBucket();
    return data;
}

async function getFeatured(path:string){
    const { data } = await supabase.storage.from('works').getPublicUrl(path);
    return data;
}

export const load = (async ({ locals, params }) => {
    try {
        const featured = getFeatured("work/Apple_logo_black.svg");
        return { featured } ;
    } catch (error) {

    }
})  satisfies PageServerLoad;