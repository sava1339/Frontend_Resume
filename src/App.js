import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./components/main/Main";
import './App.css'
import Header from "./components/header/Header";
import Experience from "./components/experience/Experience";
import Notfoundpage from "./components/notFoundPage/Notfoundpage";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>} ></Route>
                <Route path="/experience" element={<Experience/>} ></Route>
                <Route path="/about" element={<About/>} ></Route>
                <Route path="/portfolio" element={<Portfolio/>} ></Route>
                <Route path="/contact" element={<Contact/>} ></Route>
                <Route path="*" element={<Notfoundpage/>} ></Route>
            </Routes>
        </div>
    );
};

export default App;