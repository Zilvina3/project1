import Footer from "./Foot/Foot";
import Nav from "./Nav/Nav";


const Layout = ({ children}) => {
    return(      
        <div className="body">

        <Nav />
            <div className="page-main-wrap">
                {children} 
            </div>
        <Footer /> 

        </div>
    )
}

export default Layout;