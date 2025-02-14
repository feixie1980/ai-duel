import type { Meta, StoryObj } from '@storybook/react';
import { ConversationPane } from './ConversationPane';
import styled from 'styled-components';

const StoryContainer = styled.div`
  width: 500px;
  height: 300px;
  overflow: scroll;
  // border: 1px solid lightgray;
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

export const TwoMessages: Story = {
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

export const MultipleMessages: Story = {
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
      {
        id: '3',
        content: 'How is your day?',
        from: 'user',
        status: 'completed',
      },
      {
        id: '4',
        content: 'It is a rainy day in the LLM world.',
        from: 'llm',
        status: 'completed',
      },
      {
        id: '5',
        content: 'How can it rain?  It is not a real world.',
        from: 'user',
        status: 'completed',
      },
      {
        id: '6',
        content: 'It is realy to me!',
        from: 'llm',
        status: 'completed',
      },
    ],
  },
};
