import styled from 'styled-components';
import './App.css';
import Sidebar from './components/sidebar/sidebar';

const AppContainer = styled.div`
  flex: 1;
  display: flex;
`;

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <div> Main Content </div>
    </AppContainer>
  );
}

export default App;
