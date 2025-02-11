import { Box } from '@radix-ui/themes';
import { ChatMessage } from '../../API/conversationsSlice';
import styled from 'styled-components';

const UserMessageBox = styled(Box)`
  background-color: var(--accent-1);
  padding: 12px;
  border-radius: 8px;
`;

export function UserMessage({ message }: { message: ChatMessage }) {
  return <UserMessageBox>{message.content}</UserMessageBox>;
}
