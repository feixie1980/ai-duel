import styled from 'styled-components';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { Box } from '@radix-ui/themes';
import { BotMessageProps } from './BotMessage.types';

const BotMessageBox = styled.div`
  display: flex;
  gap: 10px;
  align-self: flex-start;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--gray-6);
  min-width: 80%;
`;

export default function BotMessage(props: BotMessageProps) {
  const { message } = props;
  return (
    <BotMessageBox>
      <Box>
        <ChatBubbleIcon />
      </Box>
      <Box> {message.content} </Box>
    </BotMessageBox>
  );
}
