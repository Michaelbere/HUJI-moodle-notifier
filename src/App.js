import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import './assets/css/style.css';
import ReactDOM from 'react-dom';
import React from 'react';
import Task from './Components/Task'

function App() {
    return (
        <div>
            <Task />
            <Task />
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);