import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';

import AppRoutes from './routes/routes';

import store from './store/store';
import 'typeface-lobster';
import { COLORS } from './const/styles';

const GlobalAppStyles = createGlobalStyle`
    html, body {
        background: linear-gradient(to right, ${COLORS.BLUE}, ${COLORS.PURPLE});
    }
`;

const App = () => {
    return (
        <>
            <Provider store={store}>
                <GlobalAppStyles />
                <AppRoutes />
            </Provider>
        </>
    );
};

export default App;
