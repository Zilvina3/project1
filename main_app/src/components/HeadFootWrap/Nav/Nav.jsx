import { Link } from "react-router-dom"

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
            path : '/contact',
            to : 'Contacts and Reservation'
        },
        {
            path : '/blog',
            to : 'Blog'
        },
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
            path : '/contact',
            to : 'Kontaktai ir Rezervacija'
        },
        {
            path : '/blog',
            to : 'Dienoraštis'
        },
    ]

    const language = localStorage.getItem('language')


    if(language === '0' || language === '1') {
        return(
        <nav className="eng">
            <div className="logo">
               <h2>PavadinimasEng</h2> 
            </div>
            
            <div>
                {navigationEN.map((link, num) => {
                    return(
                        <Link key={num} title={link.to} to={link.path} >{link.to}</Link>
                    )
                })}
            </div>

        </nav>
    )
    }else if(language === '3') {
        return(
           <nav className="lt">
            <div className="logo">
               <h2>PavadinimasLT</h2> 
            </div>
            
            <div>
            {navigationLT.map((link, num) => {
                    return(
                        <Link key={num} title={link.to} to={link.path} >{link.to}</Link>
                    )
                })}
            </div>

        </nav> 
        )       
    }
    
}

export default Nav;