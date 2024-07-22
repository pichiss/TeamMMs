import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';

import './reset.css'
import './App.css'

import Header from './assets/component/header/Header'
import Main from './assets/component/page/main/Main'
import Login from './assets/component/page/login/Login'

import Footer from './assets/component/footer/footer'

function App() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsMenuOpen((prevState) => !prevState);
  // };



  return (
    <>
    <Header/>
      <Routes>
        <Route path="/TeamMMs/" element={<Main />}/>
        <Route path="/TeamMMs/login" element={<Login />}/>
      </Routes>
    <Footer />
    </>
  )
}

export default App
