import { gql } from '@apollo/client';
/*export const localesQuery = gql`
  query locales {
     locales
  }
`*/
export const imagesQuery = gql`
    query images{
      images{
      id, src, text,user
      }
    }
`