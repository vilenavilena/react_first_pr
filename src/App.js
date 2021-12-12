import React, {Component} from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div class="app-wrapper-content">

                  <Routes>
                    <Route path='/messages/*' element={<Dialogs />}/>
                    <Route path='/profile' element={<Profile />}/>
                  </Routes>
                </div>
            </div>
        </BrowserRouter>
);
}

export default App;
