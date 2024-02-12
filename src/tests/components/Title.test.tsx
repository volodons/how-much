import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Title from '../../components/Title';

describe('Title component', () => {
    it('should be a functional component', () => {
        expect(Title).toBeInstanceOf(Function);
    });

    it('should render with correct tag', () => {
        render(<Title />);
        const titleElement = screen.getByTestId('title-component');
        expect(titleElement.tagName).toBe('H1');
    });

    it('should display correct text', () => {
        render(<Title />);
        const titleElement = screen.getByTestId('title-component');
        expect(titleElement.textContent).toBe('How Much?');
    });

    it('should match a snapshot', () => {
        const tree = renderer.create(<Title />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
