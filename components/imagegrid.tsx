
import React, { useState, FC, useEffect,  } from "react";
import ReactDOM from 'react-dom';
import {BigImage, BigImageDiv, Image} from "../styled-components/styledcomps";
import { useImagesQuery} from "../generated/graphql";
import { render } from "react-dom";
import { where } from "firebase/firestore";

export const Images = ()=>{
   
   const{data,loading,error} =useImagesQuery()
   
   const [ShowImage,setShowImage]= useState(false);
   const imageDetail = (id:string,src:string,text:string)=>{
    return render(<div><BigImage  src={src} id={id} onClick={()=>render(div,document.getElementById("imagegrid"))}></BigImage><p>{text}</p></div>
                           ,document.getElementById("imagegrid"));
   }
   const div = <div id="imagegrid">{data?.images.map((item)=>{return(<Image onClick={()=>(imageDetail(item.id,item.src,item.text),setShowImage((prev)=>prev=!prev))}
          src={item.src}></Image>)})}</div>
 return div;
 
}
              
   