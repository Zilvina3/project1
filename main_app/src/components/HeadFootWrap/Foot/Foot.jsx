import { useState } from 'react';
import './Foot.css'
import { Link } from 'react-router-dom';

const Footer = () => {

    const [lang] = useState(localStorage.getItem('language'));

    return(
        <footer>
            <div className='links-copy-wrap'>
                <div className='foot-links'>
                    {lang === 'ENG' ? <Link to='/home' >Home</Link> : <Link to='/home'>Pagrindinis</Link>}
                    {lang === 'ENG' ? <Link to='/services'>Services</Link> : <Link to='/services'>Paslaugos</Link>}
                    {lang === 'ENG' ? <Link to='/contacts'>Contacts</Link> : <Link to='/contacts'>Kontaktai</Link>}
                </div>
                <div className="copy-r"> TeamBo2st © Neringa Saladžė 2023 - all rights reserved.</div>
            </div>
           
        </footer>
    )
}

export default Footer;