import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navigator } from './navigator';
import { Home } from './home';
import { Search } from './search';
import { Error_404 } from './error_404';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigator />}>
                    <Route index element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="*" element={<Error_404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById('root')
);
