import { useState } from 'react';
import './Foot.css'
import { Link } from 'react-router-dom';

const Footer = () => {

    const [lang] = useState(localStorage.getItem('language'));

    return(
        <footer>
            <div className='links-copy-wrap'>
                <div className='foot-links'>
                    {lang === 'ENG' ? <Link to='/home' >Home</Link> : <Link>Pagrindinis</Link>}
                    {lang === 'ENG' ? <Link to='/services'>Services</Link> : <Link>Paslaugos</Link>}
                    {lang === 'ENG' ? <Link to='/contacts'>Contacts</Link> : <Link>Kontaktai</Link>}
                </div>
                <div className="copy-r"> nsBoost © Neringa Saladžė 2023 - all rights reserved.</div>
            </div>
           
        </footer>
    )
}

export default Footer;