import { ChatMessage } from '../../datastore/conversationsSlice';
import styled from 'styled-components';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { Box } from '@radix-ui/themes';

const BotMessageBox = styled.div`
  display: flex;
  gap: 10px;
  align-self: flex-start;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--gray-6);
  min-width: 80%;
`;

export function BotMessage({ message }: { message: ChatMessage }) {
  return (
    <BotMessageBox>
      <Box>
        <ChatBubbleIcon />
      </Box>
      <Box> {message.content} </Box>
    </BotMessageBox>
  );
}
