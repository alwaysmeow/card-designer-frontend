import React from 'react';
import { Provider } from 'react-redux';

import Сropper from './components/cropper';
import DemoCard from './components/democard';
import store from './store/store';
import './css/output.css';

const App = () => {
    return (
        <Provider store={store}>
            <Сropper/>
            <DemoCard/>
        </Provider>
    )
}

export default App;