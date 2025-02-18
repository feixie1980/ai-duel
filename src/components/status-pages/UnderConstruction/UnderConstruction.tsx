import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { UnderConstructionProps } from './UnderConstruction.types';
import UnderConstructionImg from '../../../assets/under_construction_beach.png';
import { createGlobalStyle } from 'styled-components';
import DeliusUnicaseBold from '../../../assets/fonts/DeliusUnicase-Bold.ttf';
import { Spinner } from '@radix-ui/themes';

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

const SpinnerOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const UnderConstruction: React.FC = ({ className }: UnderConstructionProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoading(false);
    }
  }, [imgRef]);

  return (
    <>
      <FontStyle />
      <StyledWrapper className={className}>
        <>
          <h1>Under construction, coming soon!</h1>
          <UCImage
            ref={imgRef}
            src={UnderConstructionImg}
            onLoad={() => {
              setIsLoading(false);
            }}
          />
        </>
        {isLoading && (
          <SpinnerOverlay>
            <Spinner size="3" />
          </SpinnerOverlay>
        )}
      </StyledWrapper>
    </>
  );
};

export default UnderConstruction;
