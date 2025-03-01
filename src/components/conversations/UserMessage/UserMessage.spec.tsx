import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import UserMessage from './UserMessage';
import { ChatMessage } from '../../../datastore/conversationsSlice';

describe('UserMessage', () => {
  it('renders correctly', () => {
    const message: ChatMessage = {
      id: '1',
      content: 'Hello World',
      from: 'user',
      status: 'completed',
    };
    const { container } = render(<UserMessage message={message} />);
    expect(container).toMatchSnapshot();
  });
});
