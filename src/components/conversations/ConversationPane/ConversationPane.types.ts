import { ReactNode } from 'react';

export interface ConversationPaneProps {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;
  /**
   * The content of the component.
   */
  children?: ReactNode;
}