import React from 'react';
import './Experience.css'

const Experience = () => {
    return (
        <div className="experience">
            <h2>Школьный сайт для подготовки к ВПР</h2>
            <h3>Должность: Fullstack developer </h3>
            <p>Учреждение: МОАУ СОШ №17</p>
            <p>Продолжительность: 1 год</p>
            <p>
                Мне предстояло делать сайт с регистрацией и БД для школьного обучения с нуля.
                В проекте я использовал сервер, который подключался к БД postgreSQL, а также взаимодействовал с клиентом.
            </p>
        </div>
    );
};

export default Experience;