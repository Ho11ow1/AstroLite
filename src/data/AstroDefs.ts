class InternalEndpoints
{
    public readonly CatFact: string = "https://catfact.ninja/fact";
}

class APIOptions
{
    public readonly GET: RequestInit = { method: "GET"};
}

class AstroDefs
{
    public readonly InternalEndpoints: InternalEndpoints = new InternalEndpoints();
    public readonly APIOptions: APIOptions = new APIOptions();
}

export const AstroConstants = new AstroDefs();
