import './App.css';
import { Routes, Route } from "react-router-dom"
import Main from './components/Main/Main';
import Layout from './components/HeadFootWrap/Layout';
import { useEffect, useState } from 'react';

function App() {

  const [lang, setLang] = useState(localStorage.getItem('language'))
  

  useEffect(() => {
  if(!lang) {
   setLang(localStorage.setItem('language', '0'))  
  }
  }, [])
  

  return (
    <Routes>
      <Route path='/' element={<Layout children={<Main />} />}/>
    </Routes>
  );
}

export default App;
