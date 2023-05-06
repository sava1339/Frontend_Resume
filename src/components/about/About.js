import React, {useEffect} from 'react';
import './About.css'
const About = () => {
    useEffect(()=>{

    },[])
    return (
        <div className="about">
            <h2 className='about-title'>Обо мне</h2>
            <p className='about-descr'>Привет, я Якимов Савели Junior+ developer, из Березников. Мне интересено веб-программирование и всё что связанно с ним.</p>
            <p className='about-descr'>В данный момент учусь на курсах "Разработка на JavaScript" в университете Сиинергии.</p>
            <p className='about-descr'>Готов работать с необычными проектами и с интересными людьми.</p>
        </div>
    );
};

export default About;