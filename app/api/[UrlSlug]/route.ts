


export const  GET =  async (req:Request, {params}:{params:{UrlSlug:string}})=>{
    const UrlSlug = params.UrlSlug;
    return Response.json(UrlSlug)
}