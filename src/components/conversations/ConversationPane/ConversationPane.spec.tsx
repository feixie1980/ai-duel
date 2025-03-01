import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ConversationPane from './ConversationPane';

describe('ConversationPane', () => {
  it('renders correctly', () => {
    const { container } = render(<ConversationPane />);
    expect(container).toMatchSnapshot();
  });
});
