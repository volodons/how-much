import { Provider } from 'react-redux';

import AppRoutes from './routes';

import store from './store/store';
import { StyledApp } from './styled/styledApp';

const App = () => (
    <>
        <Provider store={store}>
            <StyledApp />
            <AppRoutes />
        </Provider>
    </>
);

export default App;
