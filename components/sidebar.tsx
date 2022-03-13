import React, { useState, FC, useEffect } from "react";
import {SideBar, Li, Ul } from "../styled-components/styledcomps";
import { AiFillCaretRight } from "react-icons/ai";
export const Sidebar: FC = ()=>{
    const [opened, setIsOpened] = useState(false);
    const [width,setWidth] = useState('200px');
    const[color,setColor]=useState<string>("gray");
    const id = "sidebar";
    useEffect(()=>{const size= window.document.body.offsetWidth;console.log(size); setWidth(`${size/10}px`)},[setWidth]);
    const div = <SideBar isOpened={opened} Size={width} color={color} id={`sidebar_${id}`} onMouseEnter={()=>setIsOpened(true)} onMouseLeave={()=>setIsOpened(false)}>
        {!opened ? <Ul><Li><AiFillCaretRight/></Li><Li>Y</Li><Li>Z</Li></Ul> : <h1>⇇</h1> }</SideBar>;

    return div ;
}

    
