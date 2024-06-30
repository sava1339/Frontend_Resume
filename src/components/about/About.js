import React, {useEffect} from 'react';
import './About.css'
const About = () => {
    useEffect(()=>{

    },[])
    return (
        <div className="about">
            <h2 className='about-title'>Обо мне</h2>
            <p className='about-descr'>Привет, я Якимов Савелий Frontend developer, из Березников. Мне интересно веб-программирование и всё что связанно с ним.</p>
            <p className='about-descr'>Имею опыт исполнения заказов в течении 2 лет.</p>
            <p className='about-descr'>Закончил курс "Разработка на JavaScript" в университете Сиинергии.</p>
            <p className='about-descr'>Готов работать с необычными проектами и с интересными людьми.</p>
        </div>
    );
};

export default About;