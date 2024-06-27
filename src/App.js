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
            <div className='h-full w-full'>
                <div className='flex flex-row justify-center items-center gap-5 p-5'>
                    <Сropper/>
                    <div className='flex items-center'>
                        <DemoCard/>
                    </div>
                </div>
                <Panel/>
            </div>
        </Provider>
    )
}

export default App;