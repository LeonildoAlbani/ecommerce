import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'font-awesome/css/font-awesome.min.css';

import Homepage from "./components/Homepage";
import Carrinho from "./components/Carrinho";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <header className="App-header">
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />

                </header>
                <Homepage/>
                <Carrinho/>
            </Provider>
        </div>
    );
}

export default App;
