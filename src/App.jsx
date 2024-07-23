import { useState, useEffect } from 'react'

import './reset.css'
import './App.css'

import Header from './assets/component/header/Header'
import Main from './assets/component/page/main/Main'
import Login from './assets/component/page/login/Login'
import Join from './assets/component/page/login/Join'

import {Route, Routes, Link} from 'react-router-dom';


import NoticeList from './assets/component/page/noitce/noticeList';
import NoticeDetail from './assets/component/page/noitce/noticeDetail';
import Footer from './assets/component/footer/footer';
import NoticeMain from './assets/component/page/noitce/noticeMain';
import NoticeWrite from './assets/component/page/noitce/noitceWrite';

function App() {



  return (
    <>
    <Header/>
      <Routes>
      <Route path='/TeamMMs' element={<Main/>}/>
      <Route path='/TeamMMs/noticeList' element={<NoticeList/>}/>
      <Route path='/TeamMMs/detail/:id' element={<NoticeDetail />}/>
      <Route path='/TeamMMs/write' element={<NoticeWrite />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
