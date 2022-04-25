import { type } from "os";
import styled, { keyframes } from "styled-components";
type SideBarProps = {
  isOpened: boolean;
  Size: string;

}
type BigImageProps = {
    show: boolean;
}
type ImageProps = {
  src: string;
  
}
const KeyFrames = keyframes`
  0%{
      color: turquoise;
      
  }
  12.5%{
     color: rgb(64, 75, 224);
  }
  25%{
      color: rgb(140, 0, 255);
   }
  37.5%{
      color:rgb(212, 0, 255) ;
  }
  50%{
      color: rgb(255, 0, 128);
      
  }
  62.5%{
    color: rgb(212, 0, 255);
  }
  75%{
      color: rgb(140, 0, 255);
  }
  87.2%{
      color: rgb(64, 75, 224);
  }
  100%{
     color: turquoise;
  }
`
var headerheight = '100px';
export const SideBar = styled.div<SideBarProps>`position:absolute;
top: ${headerheight};
border-right: 3px solid red;
transition: all 0.5s ease;
bottom: 0%;
background: ${(props) => (props.isOpened ? 'black' : props.color)};
width: ${(props) => (props.isOpened ? props.Size : '1.9%')};
color: white;
`;



export const Li = styled.li`list-style: none;padding:10px 0px 10px 10px;border-bottom: 2px solid white;`;

export const Ul = styled.ul`padding:0;margin:0;`;

export const StyledHeader = styled.header`position:relative;
background:black;
 height:${headerheight};
 border-bottom: 3px solid red;`;

export const Image = styled.img<ImageProps>` 
            padding:0; margin:10px;
            width: 100%;
            min-width: 150px;
            //border: 4px solid turquoise; 
             //border-radius:20px 0px 20px 0px;
             //&:hover{border-radius:0px 20px 0px 20px;border: 4px solid rgb(140, 0, 255); }
             //transition:0.5s;
             src:${(props) => (props.src)};`;
        
export const BigImage = styled.img<ImageProps>`
            height:45vw;
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
           // text-align: center;
            min-height:150px;
           // border: 4px solid turquoise; 
           // border-radius:20px 20px 20px 20px;
           // transition:0s;
           // src:${(props) => (props.src)};
           // transition:1s;
            //top: 0;
            //bottom: 0;
            `;
export const H1 = styled.h1`font-size:50px;
                            animation-name:${KeyFrames};
                            animation-duration: 8s;
                            animation-iteration-count:infinite;
                            padding:1.2vw;
                            text-align:center;
                            margin:auto;
                            color:white;`;
export const StyledFooter = styled.footer`//position:relative;
                                          background:black;
                                          height:${headerheight};
                                          color:white;
                                          text-align:center;`
                                          
export const ImageGrid = styled.div`
                                    text-align: center;
                                    padding-left:20px;
                                    padding-right:20px;
                                    column-count: 4;
                                    
                                    `;
export const BigImageDiv = styled.div`text-align:center;
                                      `;
export const PP = styled.p`text-align:center; position: absolute;
margin: auto;
left: 0;
right: 0;`;
                                    
                              



