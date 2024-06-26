import React from 'react';
import { Provider } from 'react-redux';

import Сropper from './components/cropper';
import DemoCard from './components/democard';
import Panel from './components/panel';
import store from './store/store';
import './css/output.css';

const App = () => {
    return (
        <Provider store={store}>
            <div className='flex flex-row justify-center items-center gap-5 h-screen'>
                <div className='flex flex-col gap-5 p-5'>
                    <Сropper/>
                    <DemoCard/>
                </div>
                <Panel/>
            </div>
        </Provider>
    )
}

export default App;