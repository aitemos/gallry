import React, { useState, FC, useEffect } from "react";
import {SideBar, Li, Ul } from "../styled-components/styledcomps";
import { AiFillCaretRight,AiFillCaretLeft } from "react-icons/ai";
import { UploadForm} from '../components'

export const Sidebar: FC = ()=>{
    const [opened, setIsOpened] = useState(false);
    const [width,setWidth] = useState('100px');
    const[color,setColor]=useState<string>("black");
    const id = "sidebar";
   // const [uploadImage, {loading: mutationIsLoading}] = ({variables: {input: {id:"",src:"",text:""}}})
   // const result = uploadImage({variables: {input: {id:"", text: "", src:""}}})
    useEffect(()=>{const size= window.document.body.offsetWidth;console.log(size); setWidth(`${size/8}px`)},[setWidth]);
    const div = <SideBar isOpened={opened} Size={width} color={color} id={`sidebar_${id}`}>
        {opened ? <div><AiFillCaretLeft onClick={()=>setIsOpened(prev=>!prev)}>X</AiFillCaretLeft>
          <UploadForm></UploadForm> </div> 
            :  <AiFillCaretRight onClick={()=>setIsOpened(prev=>!prev)}></AiFillCaretRight>}</SideBar>;

    return div ;
}

    
