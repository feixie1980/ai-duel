import type { Meta, StoryObj } from '@storybook/react';
import UnderConstruction from './UnderConstruction';

const meta = {
  title: 'Components/status-pages/UnderConstruction',
  component: UnderConstruction,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UnderConstruction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
