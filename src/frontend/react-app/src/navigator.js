import React from "react";
import ReactDOM from 'react-dom';
import { Home } from './home.js';
import { Search } from './search.js';

function change_to_home (){
    ReactDOM.render(
    <React.StrictMode>,
            <Home />,
    </React.StrictMode>,
    document.getElementById('root'));
}

function change_to_search (){
    ReactDOM.render(
    <React.StrictMode>,
            <Search />,
    </React.StrictMode>,
    document.getElementById('root'));
}

//export default Navigator_bar;
