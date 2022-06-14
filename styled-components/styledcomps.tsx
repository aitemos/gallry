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
type InputProps = {
  type: string;
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
const KeyFrames2 = keyframes`
  0%{
      background-color: turquoise;
      
  }
  12.5%{
     background-color: rgb(64, 75, 224);
  }
  25%{
    background-color: rgb(140, 0, 255);
   }
  37.5%{
    background-color:rgb(212, 0, 255) ;
  }
  50%{
    background-color: rgb(255, 0, 128);
      
  }
  62.5%{
    background-color: rgb(212, 0, 255);
  }
  75%{
    background-color: rgb(140, 0, 255);
  }
  87.2%{
    background-color: rgb(64, 75, 224);
  }
  100%{
    background-color: turquoise;
  }
`
var headerheight = '100px';
export const SideBar = styled.div<SideBarProps>`position:absolute;
bottom: ${(props) => (props.isOpened ? '' : '0%')};
transition: all 0.5s ease;
right:10%;
border:${(props) => (props.isOpened ? 'red solid 3px' : '0%')};
text-align: center;
background: ${(props) => (props.isOpened ? 'black' : props.color)};
width: ${(props) => (props.isOpened ? props.Size : '20px')};
height: ${(props) => (props.isOpened ? props.Size : '20px')};
color: white;
padding: ${(props) => (props.isOpened ? '15px' : '0')};;
z-index: 99;
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
            max-height:40vw;
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
export const PP = styled.p`
margin-top: 10px;
left: 0;
right: 0;`;

export const Button = styled.button`
  animation-name:${KeyFrames2};
  animation-duration: 16s;
  animation-iteration-count:infinite;
  color: white;
  cursor: pointer;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
export const Input = styled.input.attrs(props => ({
  // we can define static props
  type: props.type,

}))`
  animation-name:${KeyFrames};
  animation-duration: 16s;
  animation-iteration-count:infinite;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: 0.25em;
`;
export const BigImageWrap = styled.div` position: absolute;
                                        display:flex;
                                        flex-direction:column;
                                        width: 100%;
                                        left: 0px;
                                        padding:10px 100px`;

                                    
                              



