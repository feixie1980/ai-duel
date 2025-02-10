import type { Meta, StoryObj } from '@storybook/react';
import { ConversationPane } from './coversationPane';

const meta = {
  title: 'Components/ConversationPane',
  component: ConversationPane,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ConversationPane>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
