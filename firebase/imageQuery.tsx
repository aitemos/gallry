import React from "react";
import firebase from "./firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { Image } from "../styled-components/styledcomps";
import { getFirestore } from "firebase/firestore";

/*const db = firebase.firestore();
const [images, imagesLoading, ImagesError] = useCollection(
    firebase.firestore().collection("images"),
    {}
  );
  export const ImagesQ = ()=>{
     const div =<div>{images.docs.map((item)=>(<Image onClick={()=>(imageDetail(item.id,item.src),setShowImage((prev)=>prev=!prev))}
      src={item.data().src}></Image>))}</div>;
      return div;
  }*/



