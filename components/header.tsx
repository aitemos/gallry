import React, { useState, FC, useEffect } from "react";
import { H1, StyledHeader } from "../styled-components/styledcomps";
export const Header : FC = ()=>{
    const div = <StyledHeader><H1>GALLERY</H1></StyledHeader>;
    return div;
}