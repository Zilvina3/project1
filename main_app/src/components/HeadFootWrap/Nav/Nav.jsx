import { Link, useNavigate } from "react-router-dom";
import './Nav.css';
import log from './log.gif'


const Nav = () => {

   

    const navigationEN = [
        {
            path : '/',
            to : 'Home'
        },
        {
            path : '/services',
            to : 'Services'
        },
        {
            path : '/contacts',
            to : 'Contacts'
        },
        // {
        //     path : '/blog',
        //     to : 'Blog'
        // },
    ]

    const navigationLT = [
        {
            path : '/',
            to : 'Pagrindinis'
        },
        {
            path : '/services',
            to : 'Paslaugos'
        },
        {
            path : '/contacts',
            to : 'Kontaktai'
        },
        // {
        //     path : '/blog',
        //     to : 'Dienoraštis'
        // },
    ]

    const language = localStorage.getItem('language')

    let curLinkPath = window.location.pathname

    if(language === 'ENG') {
        return(
            
        <nav className="eng">
            <select className="EN-LT" onChange={(e) => {
                localStorage.setItem('language', e.target.value)
                window.location.reload(false);
            }}>
                <option value="ENG">EN</option>
                <option value="LT">LT</option>
            </select>
            <div className="logo">
               <Link className="link-main-name" title="to home" to='/home'><img src={log} alt="Neringa" width={'50%'} /></Link>
            </div>
            
            <div className="nav-link-wrap">
                {navigationEN.map((link, num) => {
                    return(
                        <Link key={num} title={link.to} to={link.path} className={link.path === curLinkPath ? 'curLink': null} >{link.to}</Link>

                    )
                })}
            </div>

        </nav>
    )
    }else if(language === 'LT') {
        return(
           <nav className="lt">
            <select className="EN-LT" onChange={(e) => {
                localStorage.setItem('language', e.target.value)
                window.location.reload(false);
            }}>            
                <option value="LT">LT</option>
                <option value="ENG">EN</option>
            </select>
            <div className="logo">
            <Link className="link-main-name" title="to home" to='/home'><img src={log} alt="Neringa" width={'50%'} /></Link>
            </div>
            
            <div className="nav-link-wrap">
            {navigationLT.map((link, num) => {
                    return(
                        <Link className={link.path === curLinkPath ? 'curLink': null} key={num} title={link.to === 'Kontaktai ir Rezervacija' ? link.to + ' &#128394;' : link.to} to={link.path} >{link.to === 'Kontaktai ir Rezervacija' ? link.to : link.to}</Link>
                    )
                })}
            </div>

        </nav> 
        )       
    }
    
}

export default Nav;