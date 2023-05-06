import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <p className="contact-text">Хотите связаться со мной или просто поговорить, пишите!</p>
            <div className="contacts">
                <div>
                    <p>Почта: zsava0090@gmail.com</p>
                    <p>Телефон: +8-951-946-0304</p>
                </div>
                <div>
                    <a href="https://t.me/Ysavely"  target="_blank" className="tel">Telegram</a>
                    <a href="https://vk.com/ysavely" target="_blank" className="vk">VK</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;