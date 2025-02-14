import styled from 'styled-components';
import './App.css';
// import Sidebar from './components/sidebar/sidebar';
import { UnderConstruction } from './components/status-pages/UnderConstruction';

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

/*
const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
*/

function App() {
  return (
    <AppContainer>
      <UnderConstruction />
    </AppContainer>
  );
}

export default App;
