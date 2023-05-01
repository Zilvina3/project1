import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Main from './components/Main/Main';
import Layout from './components/HeadFootWrap/Layout';
import { useEffect, useState } from 'react';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';


function App() {

  const [lang, setLang] = useState(localStorage.getItem('language'))


  const routes = [
        {
            path : '/',
            element : <Layout children={<Main />} />
        },
        {
            path : '/home',
            element : <Layout children={<Main />} />
        },
        {
          path : '/services',
          element : <Layout children={<About />} />
      },
        {
            path : '/contacts',
            element : <Layout children={<Contacts />} />
        },

        {
          path : '*',
          element : <Layout children={<h1 className='wrong-path'>404<p className='not-found'>Page not found</p><p><Link className='front' to={'/home'} >Go to front page </Link></p></h1>} />
      },
    ]

  useEffect(() => {
  if(!lang) {
   setLang(localStorage.setItem('language', 'LT'))  
  }
  })
  

  return (
    <Routes>
      {routes.map((route, key) => {
        return(
          <Route key={key}
          path={route.path}
          element={route.element}
           /> 
        )      
      })}          
    </Routes>
  );
}

export default App;
