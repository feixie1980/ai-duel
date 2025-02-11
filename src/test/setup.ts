import '@testing-library/jest-dom';
import { vi } from 'vitest';

type MediaQueryList = {
  matches: boolean;
  media: string;
  onchange: null;
  addListener: () => void;
  removeListener: () => void;
  addEventListener: () => void;
  removeEventListener: () => void;
  dispatchEvent: () => void;
};

// Mock matchMedia if needed
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(
    (query): MediaQueryList => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })
  ),
});
