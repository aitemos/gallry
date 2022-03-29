import { gql } from "apollo-server-micro";

export const queries = gql`
  type Query {
    users: [User!]!
    locales: [LOCALE!]!  
    images:[Image!]!  
  }
 
  type User {
    name: String!
    id: ID!
    locale: LOCALE
    picture: String
    email: String
  }
  
  enum LOCALE {
   CS
   EN
  }
  type Image{
  id: ID!
  src: String!
  text:String
  }
  `
  
;

 