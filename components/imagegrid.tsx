
import React, { useState, FC, useEffect,  } from "react";
import {BigImage, BigImageDiv, Image, ImageGrid} from "../styled-components/styledcomps";
import { useImagesQuery} from "../generated/graphql";
import { render } from "react-dom";

export const Images = ()=>{
 
   const{data,loading,error} =useImagesQuery();
   
   const [ShowImage,setShowImage]= useState(false);
   const imageDetail = (id:string,src:string,text:string)=>{
    return render(<div><BigImage  src={src} id={id} onClick={()=>render(imagess,document.getElementById("imagegrid"))}></BigImage></div>
                     ,document.getElementById("imagegrid"));
   }
   const imagess = data?.images.map((item)=>{return(<Image onClick={()=>(imageDetail(item.id,item.src,item.text))}
   src={item.src}></Image>)});
   const div =<ImageGrid id="imagegrid">{imagess}</ImageGrid>
 return div;
 
}
              
   