import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import './assets/css/style.css';
import ReactDOM from 'react-dom';
import React from 'react';

function App() {
    return (<h1>Hello From App.js</h1>)
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);