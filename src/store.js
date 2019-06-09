import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development'
});

const middlewares = [loggerMiddleware];

export default (initialState = {}) => {
    try {
        const store = createStore(
            reducers,
            initialState,

            applyMiddleware(...middlewares)
        );
        const persistor = persistStore(store);

        if (module.hot) {
            // Enable Webpack hot module replacement for reducers
            module.hot.accept('./reducers', () => {
                const nextReducer = require('./reducers');
                store.replaceReducer(nextReducer);
            });
        }
        return { store, persistor }
    }
    catch (error) {
        console.log(' store error ', error)
    }
};
