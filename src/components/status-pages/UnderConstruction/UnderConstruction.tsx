import React from 'react';
import styled from 'styled-components';
import { UnderConstructionProps } from './UnderConstruction.types';
import UnderConstructionImg from '../../../assets/under_construction_beach.png';
import { createGlobalStyle } from 'styled-components';
import DeliusUnicaseBold from '../../../assets/fonts/DeliusUnicase-Bold.ttf';

const FontStyle = createGlobalStyle`
  @font-face {
    font-family: 'DeliusUnicaseBold';
    src: url(${DeliusUnicaseBold}) format('truetype');
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: 'DeliusUnicaseBold';
`;

const UCImage = styled.img`
  width: 50%;
`;

const UnderConstruction: React.FC = ({ className }: UnderConstructionProps) => {
  return (
    <>
      <FontStyle />
      <StyledWrapper className={className}>
        <h1>Under construction, coming soon!</h1>
        <UCImage src={UnderConstructionImg} />
      </StyledWrapper>
    </>
  );
};

export default UnderConstruction;
