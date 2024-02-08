import { render, screen } from '@testing-library/react';

import Title from '../../components/Title';

describe('Title component', () => {
    it('should render with correct text', () => {
        render(<Title />);
        const titleElement = screen.getByText('How Much?');
        expect(titleElement.tagName).toBe('H1');
    });
});
