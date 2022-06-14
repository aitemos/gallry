import React, { useState } from 'react';
import { render } from 'react-dom';
import { useUserContext } from './userContent';
import { useImagesQuery } from '../generated/graphql';
import {
  BigImage,
  BigImageWrap,
  Image,
  ImageGrid,
  PP,
} from '../styled-components/styledcomps';

export const Images = () => {
  const { data, loading, error } = useImagesQuery();
  const [ShowImage, setShowImage] = useState(false);
  const { user } = useUserContext();
  if(user){
    const imagess = data?.images.map((item) => {
      return (
        <Image key={item.id}
          onClick={() => imageDetail(item.id, item.src, item.text, item.user)}
          src={item.src}
        ></Image>
      );
    });
    const imageDetail = (id: string, src: string, text: string, user: string) => {
      return render(
        <BigImageWrap>
          <BigImage
            src={src}
            id={id}
            onClick={() => render(imagess, document.querySelector('#imagegrid'))}
          ></BigImage>
          <i>created by {}</i>
          <PP>{text}</PP>
        </BigImageWrap>,
        document.querySelector('#imagegrid'),
      );
    };
  
    return <ImageGrid id="imagegrid">{imagess}</ImageGrid>;
  }else{
    return <h1>please login</h1>;
  }
  
};
