import Footer from "./Foot/Foot";
import Nav from "./Nav/Nav";
import './Layout.css';


const Layout = ({ children}) => {
    return(      
        <div>

        <Nav />
            <div className="page-main-wrap">
                {children} 
            </div>
        <Footer /> 

        </div>
    )
}

export default Layout;