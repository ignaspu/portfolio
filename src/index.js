import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PageProvider } from './context/PageContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PageProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </PageProvider>
);
