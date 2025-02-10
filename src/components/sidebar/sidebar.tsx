import { Toolbar } from 'radix-ui';
import { ReactElement } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 240px;
  padding: 24px 16px;
  border-inline: 1px solid var(--color-neutral-200);
`;

const ToolsContainer = styled(Toolbar.Root)`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  width: 100%;
  height: 60px;
  padding: 10px 14px;
`;

const BigButton = styled(Toolbar.Button)`
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
  const openAPISettingManager = () => {};

  return (
    <SidebarContainer>
      <ToolsContainer>
        <BigButton onClick={openAPISettingManager}>Settings</BigButton>
      </ToolsContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
