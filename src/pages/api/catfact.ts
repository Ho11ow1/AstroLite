import type { APIRoute } from "astro";
import { AstroConstants } from "@data/AstroDefs";

export const GET: APIRoute = async () => {

    try
    {
        const response = await fetch(AstroConstants.InternalEndpoints.CatFact, AstroConstants.APIOptions.GET);
        if (!response.ok)
        {
            throw new Error(`HTTP error ${response.status}`);
        }

        const result = await response.json();

        return new Response(JSON.stringify(result.fact), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    catch(error)
    {
        return new Response(JSON.stringify("Failed to fetch API"), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }


}
