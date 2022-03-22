export type Image = {
    id:string;
    src:string;
    text:string;
}

export const images =async (_parent:any,_args:any,_context:any):Promise<Image[]> => {
    return [{id:"Pepa",src:"1",text:"x"},{id:"Eva",src:"2",text:"x"}];
}