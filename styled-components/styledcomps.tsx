import styled from "styled-components";
interface TitleProps {
    readonly isOpened: boolean;
    readonly Size: string; 
  }
export const SideBar = styled.div<TitleProps>`position:absolute;
left:0;
top: 0;
bottom:0;
border-right: 3px solid red;
transition: all 0.5s ease;
background: ${(props) =>(props.isOpened ? 'gray' : 'red')};
width: ${(props) =>(props.isOpened ? '50px' :props.Size)};`;

export const Li = styled.li`list-style: none; padding: 0px;`;