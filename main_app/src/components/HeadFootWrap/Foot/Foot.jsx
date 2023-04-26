import './Foot.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
            <div className='links-copy-wrap'>
                <div className='foot-links'>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Contacts</Link>
                </div>
                <div className="copy-r"> “!!!Comp name!!!!” © Neringa Saladžė 2023 - all rights reserved.</div>
            </div>
           
        </footer>
    )
}

export default Footer;