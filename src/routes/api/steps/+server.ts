import { json } from '@sveltejs/kit';
import { supabase } from "$lib/server/supabaseClient";

async function getSingleStep(workId: number, step: number){
    const{ data, error } = await supabase.from("Step").select().match({ workId: workId, step: step }).single();
    return data;
}

export async function GET({ url }) {
    const steps = await getSingleStep(url.searchParams.get('work'), url.searchParams.get('step'));
    return json(steps);
}