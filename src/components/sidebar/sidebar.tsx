import { Button } from '@radix-ui/themes';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { APISettingsManager } from '../apiSettingsManager';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 240px;
  padding: 24px 16px;
  border-inline: 1px solid var(--gray-5);
`;

const ToolsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  width: 100%;
  height: 60px;
  padding: 10px 14px;
`;

const BigButton = styled(Button)`
  color: black;
  width: 100%;
  background: none;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

function Sidebar(): ReactElement {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <SidebarContainer>
      <ToolsContainer>
        <BigButton onClick={() => setIsSettingsOpen(true)}>Settings</BigButton>
      </ToolsContainer>
      <APISettingsManager
        open={isSettingsOpen}
        onOpenChange={setIsSettingsOpen}
      />
    </SidebarContainer>
  );
}

export default Sidebar;
