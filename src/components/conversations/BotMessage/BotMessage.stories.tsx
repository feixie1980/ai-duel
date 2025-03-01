import type { Meta, StoryObj } from '@storybook/react';
import BotMessage from './BotMessage';

const meta = {
  title: 'Components/conversations/BotMessage',
  component: BotMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BotMessage>;

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
