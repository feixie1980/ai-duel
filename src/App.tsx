import { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: red;
`;

function App() {
  const [message] = useState('Hello World');

  return (
    <>
      <div>
        <StyledH1>{message}</StyledH1>
      </div>
    </>
  );
}

export default App;
