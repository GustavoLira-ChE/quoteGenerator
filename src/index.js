import React from 'react';
import reactDom from 'react-dom';
import './index.css'


/* Here comes the import components to display in tha app */
import App from './components/App';

reactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);