import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
    let session = await locals.getSession();
    if (!session) throw redirect(303, "/");
}