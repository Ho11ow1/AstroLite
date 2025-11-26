import { JSConstants } from "@scripts/JSDefs";

async function CallCatfact()
{
    try
    {
        const response = await fetch(JSConstants.Endpoints.CatFact, JSConstants.APIOptions.GET);
        if (!response.ok)
        {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        SetElementText(result);
    }
    catch (error)
    {
        console.error("Fetch error:\n", error);
    }
}

function SetElementText(message: string)
{
    const element = document.getElementById("changeMe");

    if (element === null) { return; }
    element.innerHTML = message;
}

function AddEventCallback()
{
    const catfactBtn = document.getElementById("GetCatFactBtn");

    if (catfactBtn === null) { return;}
    catfactBtn.addEventListener("click", CallCatfact);
}

function Init()
{
    if (document.readyState !== "loading")
    {
        AddEventCallback();
    }
    else
    {
        document.addEventListener('DOMContentLoaded', AddEventCallback);
    }
}

Init();
export {};