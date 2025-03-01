import { Box } from '@radix-ui/themes';
import styled from 'styled-components';
import { UserMessageProps } from './UserMessage.types';

const UserMessageBox = styled(Box)`
  align-self: flex-end;
  background-color: var(--gray-2);
  padding: 12px;
  border-radius: 8px;
`;

export default function UserMessage(props: UserMessageProps) {
  const { message } = props;
  return <UserMessageBox>{message.content}</UserMessageBox>;
}
