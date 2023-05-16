import React from 'react';
import p1 from './img/P-1.webp'
import p2 from './img/P-2.webp'
import p3 from './img/P-3.webp'
import p4 from './img/P-4.webp'
import p5 from './img/P-5.webp'
import p6 from './img/P-6.webp'
import './Portfolio.css'
const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio-block">
                <img src={p1} alt=""/>
                <p>Магазин по продаже детских подгузников</p>
            </div>
            <div className="portfolio-block">
                <img src={p2} alt=""/>
                <p>Сайт для аренды квартир</p>
            </div>
            <div className="portfolio-block">
                <img src={p3} alt=""/>
                <p>Сайт для аренды и продажи квартир и домов</p>
            </div>
            <div className="portfolio-block">
                <img src={p4} alt=""/>
                <p>Школьный сайт для подготовки к ВПР и решения задач</p>
            </div>
            <div className="portfolio-block">
                <img src={p5} alt=""/>
                <p>Сайт по продаже плакатов</p>
            </div>
            <div className="portfolio-block">
                <img src={p6} alt=""/>
                <p>Простой сайт опросник</p>
            </div>
        </div>
    );
};

export default Portfolio;