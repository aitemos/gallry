
import React, { useState, FC, useEffect,  } from "react";
import ReactDOM from 'react-dom';
import {BigImage, BigImageDiv, Image} from "../styled-components/styledcomps";
import {useFirestore} from '../hooks/useFirestore';
import {images} from './images';
import { render } from "react-dom";

export const Images = ()=>{
   const [ShowImage,setShowImage]= useState(false);
   const imageDetail = (id:string,src:string)=>{
    return render(<BigImage  src={src} onClick={()=>render(div,document.getElementById("imagegrid"))}></BigImage>
                           ,document.getElementById("imagegrid"));
   }
   const div = <div id="imagegrid">{images.map((item)=>{return(<Image onClick={()=>(imageDetail(item.id,item.src),setShowImage((prev)=>prev=!prev))}
          src={item.src} ></Image>)})}</div>
 return div;
 
}
              
   