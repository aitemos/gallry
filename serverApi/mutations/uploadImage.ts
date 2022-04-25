import { Image } from '../queries/images';
type uploadImageInput = {
  id: string;
  src: string;
  text: string;
}
export const uploadImage = async (_parent: any, args: { input: uploadImageInput }, context: any, _info: any): Promise<Image> => {
  return {id: args.input.id, src: args.input.src, text:args.input.src }
}