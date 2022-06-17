import React, { useState } from 'react';
import { render } from 'react-dom';
import { useUserContext } from './userContent';
import { useImagesQuery } from '../generated/graphql';
import {
  BigImage,
  BigImageWrap,
  Image,
  ImageGrid,
  PP,  Input,
} from '../styled-components/styledcomps';

export const Images = () => {
  const { data, loading, error } = useImagesQuery();
  const [ShowImage, setShowImage] = useState(false);
  const { user } = useUserContext();
  const [isChecked, setIsChecked] = useState(false);
  if(user){
    const imagess = data?.images.map((item) => {
      if(isChecked){
        if(item.user === user.user.email){
          return (
            <Image key={item.id}
            onClick={() => imageDetail(item.id, item.src, item.text, item.user)}
            src={item.src}
          ></Image>
        );
        }
      }else{
        return (
          <Image key={item.id}
            onClick={() => imageDetail(item.id, item.src, item.text, item.user)}
            src={item.src}
          ></Image>
        );
      }
      
    });
    const handleOnChange = () => {
      
      if(isChecked){
        const imagess = data?.images.map((item) => {
            if(item.user === user.user.email){
              return (
                <Image key={item.id}
                onClick={() => imageDetail(item.id, item.src, item.text, item.user)}
                src={item.src}
              ></Image>
            );
            }
          
        });
        render(imagess, document.querySelector('#imagegrid'));
      }
    };
    const imageDetail = (id: string, src: string, text: string, user: string) => {
      return render(
        <BigImageWrap>
          <BigImage
            src={src}
            id={id}
            onClick={() => render(imagess, document.querySelector('#imagegrid'))}
          ></BigImage>
          <i>created by {user}</i>
          <PP>{text}</PP>
        </BigImageWrap>,
        document.querySelector('#imagegrid'),
      );
    };
  
    return <div><div>filter my photos:<Input type="checkbox" checked={isChecked} onChange={() => {setIsChecked(!isChecked);handleOnChange}}></Input></div><ImageGrid id="imagegrid">{imagess}</ImageGrid></div>;
  }else{
    return <h1>please login</h1>;
  }
  
};
