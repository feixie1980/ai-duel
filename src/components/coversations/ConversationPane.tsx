import { ChatMessage } from '../../datastore/conversationsSlice';
import { Flex } from '@radix-ui/themes';
import { UserMessage } from './UserMessage';
import styled from 'styled-components';
import { BotMessage } from './BotMessage';

const Container = styled(Flex)`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export interface ConversationPaneProps {
  messages?: ChatMessage[];
}

export function ConversationPane(props: ConversationPaneProps) {
  const { messages } = props;

  return (
    <Container direction="column" gap="var(--space-4)">
      {messages &&
        messages.map((message) => {
          if (message.from === 'user') {
            return <UserMessage message={message} />;
          }
          return <BotMessage message={message} />;
        })}
    </Container>
  );
}
