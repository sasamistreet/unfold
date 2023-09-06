import { json } from '@sveltejs/kit';
import { supabase } from "$lib/server/supabaseClient";


async function getSingleStep(workId: number, step: number){
    const{ data, error } = await supabase.from("Step").select().match({ workId: workId, step: step }).single();
    console.log(data);
    return data;
}

async function getfiveSteps(workId: number, step:number){
    let array: Array<Number> = [0,0,0,0,0];
    array = [step-2, step-1, step++, step++,　step++];
    const{ data, error } = await supabase.from("Step").select().eq('workId', workId).in('step', array).order('step', { ascending: true });
    console.log(data[1].figure_svg_path);
    return data;
}

export async function GET({ locals, url }) {
    const steps = await getSingleStep(url.searchParams.get('work'), url.searchParams.get('step'));
    
    return json(steps);
}