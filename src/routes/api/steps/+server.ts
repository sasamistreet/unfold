import { json } from '@sveltejs/kit';
import { supabase } from "$lib/server/supabaseClient";


async function getStep(workId, step){
    const{ data, error } = await supabase.from("Step").select().match({'workId': workId, 'step': step});
    return data;
}

export async function GET({ url }) {
    const steps = await getStep(1, 5);
    return json(steps);
}