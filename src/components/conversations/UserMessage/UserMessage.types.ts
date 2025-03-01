import { ChatMessage } from '../../../datastore/conversationsSlice';

export interface UserMessageProps {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;

  message: ChatMessage;
}
