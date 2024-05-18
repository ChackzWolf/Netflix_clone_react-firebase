import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { NavBar } from './Components/NavBar/NavBar';
import {Banner} from './Components/Banner/Banner';
import RowPosts from './Components/RowPosts/RowPosts';
import { action } from './constants/url';
import { Footer } from "./Components/Footer/Footer"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
        <body className='bg-zinc-900'>
            <NavBar/>
            <Banner/>
            <RowPosts title="Action" url={action} />
            <RowPosts title="Action" url={action} />
            <RowPosts title="Action" url={action} />
            <Footer/>
        </body>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
