import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {

    
    const navigationEN = [
        {
            path : '/',
            to : 'Home'
        },
        {
            path : '/about',
            to : 'About'
        },
        {
            path : '/contacts',
            to : 'Contacts and Reservation'
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
            path : '/about',
            to : 'Apie'
        },
        {
            path : '/contacts',
            to : 'Kontaktai ir Rezervacija'
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
            <select className="EN-LT">
                <option value="EN" onClick={() => {
                    localStorage.setItem('language', 'ENG')
                    window.location.reload()
                }}>EN</option>
                <option value="LT" onClick={() => {
                    localStorage.setItem('language', 'LT')
                    window.location.reload()
                }}>LT</option>
            </select>
            <div className="logo">
               <Link className="link-main-name" title="to home" to='/home'><h2>PavadinimasEng</h2> </Link>
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
            <select className="EN-LT">            
                <option value="LT" onClick={() => {
                    localStorage.setItem('language', 'LT')
                    window.location.reload()
                }}>LT</option>
                <option value="EN" onClick={() => {
                    localStorage.setItem('language', 'ENG')
                    window.location.reload()
                }}>EN</option>
            </select>
            <div className="logo">
            <Link className="link-main-name" title="to home" to='/home'><h2>PavadinimasLT</h2> </Link>
            </div>
            
            <div className="nav-link-wrap">
            {navigationLT.map((link, num) => {
                    return(
                        <Link className={link.path === curLinkPath ? 'curLink': null} key={num} title={link.to} to={link.path} >{link.to}</Link>
                    )
                })}
            </div>

        </nav> 
        )       
    }
    
}

export default Nav;