import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const preview: Preview = {
  decorators: [(Story) => <Theme>{Story()}</Theme>] as Decorator[],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
