import { db, getCollection} from "../lib/db";
export type Image = {
    id:string;
    src:string;
    text:string;
}

/*type ImageEntity = {
  code: Image,
}
const ensureImages = async () => {
  
  const collectionsNames = (await db().listCollections()).map(col => col.id);
  console.log(collectionsNames);
}
export const images = async (_parent: any, _args: any, _context: any) => {
  await ensureImages();
  const query = await getCollection<ImageEntity>('images');
  const snapshot = await query.get();
  const docs = snapshot.docs.map(doc=>doc.data().code)
  console.log(snapshot.docs.map(doc=>doc.data().code));
  return docs;
}*/
export const images =async (_parent:any,_args:any,_context:any):Promise<Image[]> => {
    return [{id:"1",src:"https://firebasestorage.googleapis.com/v0/b/gallery-9e321.appspot.com/o/1.jpg?alt=media&token=257342e6-5027-4821-b448-331165c496c7",text:"x"},
            {id:"2",src:"https://firebasestorage.googleapis.com/v0/b/gallery-9e321.appspot.com/o/2.jpg?alt=media&token=3b1bc60d-ac3c-4eb3-b246-947a8694ee84",text:"x"},
            {id:"3",src:"https://firebasestorage.googleapis.com/v0/b/gallery-9e321.appspot.com/o/3.jpg?alt=media&token=b6f3f7a7-800b-49da-9fd0-1ca74275df55",text:"x"},
            {id:"4",src:'https://firebasestorage.googleapis.com/v0/b/gallery-9e321.appspot.com/o/4.jpg?alt=media&token=2003309a-7df5-4496-9528-780e4918a037',text:"x"},
            {id:"9",src:'https://firebasestorage.googleapis.com/v0/b/gallery-9e321.appspot.com/o/9.jpg?alt=media&token=df892408-0880-4334-a157-1f2cce2d9cd0',text:"x"},
            {id:"5",src:'https://firebasestorage.googleapis.com/v0/b/gallery-9e321.appspot.com/o/5.jpg?alt=media&token=d805356a-2fee-49e9-8568-d494f9209089',text:"x"},
            {id:"6",src:'https://firebasestorage.googleapis.com/v0/b/gallery-9e321.appspot.com/o/6.jpg?alt=media&token=c9eeea3d-a297-4ae2-9360-7b702496b802',text:"x"},
            {id:"8",src:'https://firebasestorage.googleapis.com/v0/b/gallery-9e321.appspot.com/o/8.jpg?alt=media&token=5df81746-499f-4ec7-a28a-1f73942bd0da',text:"x"},
            {id:"7",src:'https://firebasestorage.googleapis.com/v0/b/gallery-9e321.appspot.com/o/7.jpg?alt=media&token=88a00f97-08e4-4af4-a3c2-4befc11d6e49',text:"x"},
            {id:"10",src:'https://firebasestorage.googleapis.com/v0/b/gallery-9e321.appspot.com/o/10.jpg?alt=media&token=c62c1787-587a-4e87-abab-eb29417e430c',text:"x"}];
}