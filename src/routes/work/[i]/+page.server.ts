import { supabase } from "$lib/server/supabaseClient";

export async function load({ locals, params }) {
    try {
        const { data, error  } = await supabase.from("Work").select().eq('id', 1).single();
        if (error) throw error;
        return data;
    } catch (error) {

    }
}