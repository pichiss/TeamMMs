import { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom';

import './reset.css'
import './App.css'

import Header from './assets/component/header/Header'
import Main from './assets/component/page/main/Main'
import Login from './assets/component/page/login/Login'
import Join from './assets/component/page/login/Join'

import Footer from './assets/component/footer/footer'
import Profile from './assets/component/page/mypage/profile'


function App() {
  const [page, setPage] = useState(true);
  // 로그인
  const code = new URL(window.location.href).searchParams.get("code");
  // console.log(code)
  
  return (
    <>
    {page == true ?
    <>
      <Header setPage={setPage} code={code}/>
        <Routes>
          <Route path="/TeamMMs/" element={<Main />}/>
          <Route path="/TeamMMs/login" element={<Login code={code} />}/>
          <Route path="/TeamMMs/join" element={<Join />}/>
          <Route path="/TeamMMs/mypage" element={<Profile />}/>
        </Routes>
      <Footer />
    </>
    :
    <>
      <div>학습하기 페이지 출력</div>
    </>
    }
    </>
  )
}

export default App
