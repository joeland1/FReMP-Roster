import ReactDOM from 'react-dom';
import React from 'react';

const App = () => {
    return (
        <h1>This is the index page!</h1>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById('root'));