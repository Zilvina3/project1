import './App.css';
import { Routes, Route } from "react-router-dom"
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
          path : '/about',
          element : <Layout children={<About />} />
      },
        {
            path : '/contacts',
            element : <Layout children={<Contacts />} />
        },
        {
            path : '/blog',
            element : <Layout children={<h1>Blog</h1>} />
        },
        {
          path : '*',
          element : <Layout children={<h1>Wrong path . . .</h1>} />
      },
    ]

  useEffect(() => {
  if(!lang) {
   setLang(localStorage.setItem('language', 'LT'))  
  }
  }, [])
  

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
