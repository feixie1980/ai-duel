import type { Meta, StoryObj } from '@storybook/react';
import { ConversationPane } from './CoversationPane';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    overflow: scroll;
  }
`;

const StoryContainer = styled.div`
  width: 500px;
  height: 300px;
  overflow: scroll;
  border: 1px solid lightgray;
  background-color: var(--accent-1);
`;

const meta = {
  title: 'Components/ConversationPane',
  component: ConversationPane,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <StoryContainer>
          <Story />
        </StoryContainer>
      </>
    ),
  ],
} satisfies Meta<typeof ConversationPane>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {},
};

export const SingleUserMessage: Story = {
  args: {
    messages: [
      {
        id: '1',
        content: 'hi, I am a human!',
        from: 'user',
        status: 'completed',
      },
    ],
  },
};

export const Message: Story = {
  args: {
    messages: [
      {
        id: '1',
        content: 'hi, I am a human!',
        from: 'user',
        status: 'completed',
      },
      {
        id: '2',
        content: 'hi, I am a LLM bot!',
        from: 'llm',
        status: 'completed',
      },
    ],
  },
};
