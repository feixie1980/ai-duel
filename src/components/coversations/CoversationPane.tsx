import { ChatMessage } from '../../API/conversationsSlice';
import { Flex } from '@radix-ui/themes';
import { UserMessage } from './UserMessage';
import styled from 'styled-components';

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
    <Container direction="row">
      {messages &&
        messages.map((message) => {
          if (message.from === 'user') {
            return <UserMessage message={message} />;
          }
          return <div>{message.content}</div>;
        })}
    </Container>
  );
}
