import React, { FC } from 'react';

import { H1, StyledHeader } from '../styled-components/styledcomps';
import { Sidebar } from './index';

export const Header: FC = () => {
  return (
    <StyledHeader>
      <H1>GALLERY</H1>
      <Sidebar />
    </StyledHeader>
  );
};
