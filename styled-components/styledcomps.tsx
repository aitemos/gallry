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
var headerheight = '100px';
export const SideBar = styled.div<SideBarProps>`position:absolute;
left:0;
top: ${headerheight};
bottom:0;
border-right: 3px solid red;
transition: all 0.5s ease;
background: ${(props) => (props.isOpened ? 'red' : props.color)};
width: ${(props) => (props.isOpened ? props.Size : '50px')};
`;

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

export const Li = styled.li`list-style: none;padding:10px 0px 10px 10px;border-bottom: 2px solid white;`;

export const Ul = styled.ul`padding:0;margin:0;`;

export const StyledHeader = styled.header`position:relative;background:black; height:${headerheight};`;

export const Image = styled.img<ImageProps>` 
            position:relative;
            z-index: 0;
             padding:0; margin:10px;min-height:150px;
             height:15vw;text-align:center;
             border: 4px solid turquoise; 
             border-radius:20px 0px 20px 0px;
             &:hover{border-radius:0px 20px 0px 20px;border: 4px solid rgb(140, 0, 255); }
            transition:0.5s;src:${(props) => (props.src)};`;
        
export const BigImage = styled.img<ImageProps>`
            padding:0; margin:10px;
            height:45vw;
            min-height:150px;
            text-align:center;
            border: 4px solid turquoise; 
            border-radius:20px 20px 20px 20px;
            transition:0s;
            src:${(props) => (props.src)};
            transition:1s;
            margin: auto;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;`;
export const BigImageDiv = styled.div<BigImageProps>`z-index:${(props) => (props.show?2 :-1)};
    display:${(props) => (props.show?'contents':'none')};`;
export const H1 = styled.h1`font-size:50px;
                            animation-name:${KeyFrames};
                            animation-duration: 8s;
                            animation-iteration-count:infinite;
                            padding:1.2vw;
                            text-align:center;
                            margin:auto;
                            color:white;`;
export const StyledFooter = styled.footer`position:relative;
                                          background:black;
                                          height:${headerheight};
                                          color:white;
                                          text-align:center;`



