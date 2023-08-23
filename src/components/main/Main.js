import React, {useEffect, useState} from 'react';
import portfolioLogo from './img/portfolio-logo.webp';
import './Main.css';
import './loader.css'
import reactLogo from './img/img1-react-logo.webp';
import htmlLogo from './img/img2-HTML-logo.webp';
import cssLogo from './img/img3-CSS-logo.webp';
import nodeLogo from './img/img4-node-logo.webp';
import webpackLogo from './img/img5-webpack-logo.webp';
import reduxLogo from './img/img6-redux-logo.webp';
import postgresqlLogo from './img/img7-postgresql-logo.webp';
import sassLogo from './img/img8-sass-logo.webp';
import tsLogo from './img/img9-ts-logo.webp';
import jsLogo from './img/img10-js-logo.webp';


const Main = () => {
    const [loader,setLoader] = useState(true)
    console.log(window.innerWidth)
    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false)
            const logos = document.querySelectorAll(".skill-img");
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            logos.forEach(el=>{
                el.style.opacity = "0"
                el.style.transform = "translateX(100px)"
            })
            setTimeout(()=>{
                logos.forEach(el=>{
                    el.style.opacity = "100"
                    el.style.transition = `transform ${(getRandomInt(4)+3)/2}s, opacity 4s, margin 3s`
                    el.style.transform = "translateX(0px)"
                })
            },150);
            const observer = new IntersectionObserver((entries)=>{
                entries.forEach(el=>{
                    if(el.isIntersecting){
                        el.target.classList.add('show')
                    }else{
                        el.target.classList.remove('show')
                    }
                })
            })
            const hiddenObjs = document.querySelectorAll('.hidden');
            hiddenObjs.forEach(el=>observer.observe(el))
        },500)
    },[])
    return (
        <div>
            {loader ?
                <div className="loader">
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                :
                <div className="main">
                    <div className="portfolio-logo">
                        <img src={portfolioLogo} alt=""/>
                    </div>
                    <div className="info">
                        <div className="info-top">
                            <h1 className="specialization hidden">Junior<span>+</span> Front-end developer</h1>
                            <div className='info-data-block'>
                                <p className='info-data-block-name'>Якимов Савелий 16 лет <span></span> Живу в Березниках</p>
                                <p className="skill-text">Навыки:</p>
                                <div className="skill-list">
                                    <img className="hide skill-img" src={reactLogo} alt=""/>
                                    <img className="hide skill-img" src={htmlLogo} alt=""/>
                                    <img className="hide skill-img" src={cssLogo} alt=""/>
                                    <img className="hide skill-img" src={nodeLogo} alt=""/>
                                    <img className="hide skill-img" src={webpackLogo} alt=""/>
                                    <img className="hide skill-img" src={reduxLogo} alt=""/>
                                    <img className="hide skill-img" src={postgresqlLogo} alt=""/>
                                    <img className="hide skill-img" src={sassLogo} alt=""/>
                                    <img className="hide skill-img" src={tsLogo} alt=""/>
                                    <img className="hide skill-img" src={jsLogo} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="price info-bottom">
                            <p>36 000р/мес</p>
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default Main;