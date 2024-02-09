import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('Index Component', () => {
    it('should render the application without errors', () => {
        let root: any;

        act(() => {
            root = document.createElement('div');
            root.id = 'root';
            document.body.appendChild(root);
        });

        act(() => {
            const rootElement = ReactDOM.createRoot(root);
            rootElement.render(
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            );
        });
    });

    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
