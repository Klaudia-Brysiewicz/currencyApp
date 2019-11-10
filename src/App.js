import React from 'react';
import MainPage from './components/mainPage';
import { Provider } from 'react-redux';
import Store from './store/createStore';

const store = Store();

export default function App() {
    return (
        <Provider store={store}>
            <MainPage />
        </Provider>
    )
}
