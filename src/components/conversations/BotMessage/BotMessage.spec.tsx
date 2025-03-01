import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import BotMessage from './BotMessage';
import { ChatMessage } from '../../../datastore/conversationsSlice';

describe('BotMessage', () => {
  it('renders correctly', () => {
    const message: ChatMessage = {
      id: '1',
      content: 'Hello World',
      from: 'llm',
      status: 'completed',
    };
    const { container } = render(<BotMessage message={message} />);
    expect(container).toMatchSnapshot();
  });
});
