import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params, request }) => {
    return new Response(
        JSON.stringify({
            message: "You're logged in!",
        }),
        { status: 200 }
    );
};