import React from 'react';
import { AppRegistry } from 'react-native';
import Navigation from './src/Navigation/Index.tsx';
import { name as appName } from './app.json';
import { store } from './src/Management';
import { Provider } from 'react-redux';

const App = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => App);
