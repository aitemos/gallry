import { gql } from 'apollo-server-micro';

// ****************************
/* graphql gql types  */
// ****************************
export const mutations = gql`
  type Mutation {
    updateProfile(input: UpdateProfileInput!): User
    uploadImage(input:UploadImageInput!): Image
  }
 
  input UpdateProfileInput {
    name: String
    locale: LOCALE
  }
  input UploadImageInput{
    id:String
    src: String
    text: String    
  }
 
`;
