import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import UnderConstruction from './UnderConstruction';

describe('UnderConstruction', () => {
  it('renders correctly', () => {
    const { container } = render(<UnderConstruction />);
    expect(container).toMatchSnapshot();
  });
});
