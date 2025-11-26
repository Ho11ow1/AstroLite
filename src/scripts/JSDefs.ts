class Endpoints
{
    public readonly CatFact: string = "/api/catfact";
}

class APIOptions
{
    public readonly GET: RequestInit = { method: "GET"};
}

class JSDefs
{
    public readonly Endpoints: Endpoints = new Endpoints();
    public readonly APIOptions: APIOptions = new APIOptions();

    public readonly Minute: number = 60000;
}

export const JSConstants = new JSDefs();