import type { Meta, StoryObj } from '@storybook/react';
import UserMessage from './UserMessage';

const meta = {
  title: 'Components/conversations/UserMessage',
  component: UserMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: {
      id: '1',
      content: 'Hello World',
      from: 'llm',
      status: 'completed',
    },
  },
};
