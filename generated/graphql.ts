// THIS FILE IS GENERATED, DO NOT EDIT!
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Image = {
  readonly id: Scalars['ID'];
  readonly src: Scalars['String'];
  readonly text: Scalars['String'];
  readonly user: Scalars['String'];
};

export enum Locale {
  CS = 'CS',
  EN = 'EN',
  RU = 'RU'
}

export type Mutation = {
  readonly updateProfile?: Maybe<User>;
  readonly uploadImage?: Maybe<Image>;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUploadImageArgs = {
  input: UploadImageInput;
};

export type Query = {
  readonly images: ReadonlyArray<Image>;
  readonly locales: ReadonlyArray<Locale>;
  readonly users: ReadonlyArray<User>;
};

export type UpdateProfileInput = {
  readonly locale?: InputMaybe<Locale>;
  readonly name?: InputMaybe<Scalars['String']>;
};

export type UploadImageInput = {
  readonly id?: InputMaybe<Scalars['String']>;
  readonly src?: InputMaybe<Scalars['String']>;
  readonly text?: InputMaybe<Scalars['String']>;
};

export type User = {
  readonly email?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly locale?: Maybe<Locale>;
  readonly name: Scalars['String'];
  readonly picture?: Maybe<Scalars['String']>;
};

export type ImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type ImagesQuery = { readonly __typename: 'Query', readonly images: ReadonlyArray<{ readonly __typename: 'Image', readonly id: string, readonly src: string, readonly text: string, readonly user: string }> };


export const ImagesDocument = gql`
    query images {
  images {
    id
    src
    text
    user
  }
}
    `;

/**
 * __useImagesQuery__
 *
 * To run a query within a React component, call `useImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useImagesQuery(baseOptions?: Apollo.QueryHookOptions<ImagesQuery, ImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImagesQuery, ImagesQueryVariables>(ImagesDocument, options);
      }
export function useImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImagesQuery, ImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImagesQuery, ImagesQueryVariables>(ImagesDocument, options);
        }
export type ImagesQueryHookResult = ReturnType<typeof useImagesQuery>;
export type ImagesLazyQueryHookResult = ReturnType<typeof useImagesLazyQuery>;
export type ImagesQueryResult = Apollo.QueryResult<ImagesQuery, ImagesQueryVariables>;