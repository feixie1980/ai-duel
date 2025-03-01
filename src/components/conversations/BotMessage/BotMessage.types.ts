import { ChatMessage } from '../../../datastore/conversationsSlice';

export interface BotMessageProps {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;

  message: ChatMessage;
}
