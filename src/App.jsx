import './reset.css'
import './App.css'

import { Route, Routes, Link } from 'react-router-dom';
import { eduContents, qDatas } from './assets/component/page/edu/eduData.js';
import { useState, useEffect, createContext } from 'react'
import { kakaos } from './loginData/kakao.jsx'

import Header from './assets/component/header/Header'
import Main from './assets/component/page/main/Main'
import Login from './assets/component/page/login/Login'
import Join from './assets/component/page/login/Join'
import Catch from './assets/component/page/catch/catch.jsx'
import Footer from './assets/component/footer/footer';


import NoticeList from './assets/component/page/noitce/noticeList';
import NoticeDetail from './assets/component/page/noitce/noticeDetail';
import NoticeWrite from './assets/component/page/noitce/noitceWrite';
import Profile from './assets/component/page/mypage/profile'
import Point from './assets/component/page/mypage/point.jsx';

import EduMain from './assets/component/page/edu/EduMain.jsx';
import EduToday from './assets/component/page/edu/EduToday.jsx';
import EduTodayCont from './assets/component/page/edu/EduTodayCont.jsx';
import EduMathQ1 from './assets/component/page/edu/EduMath/EduMathQ1.jsx';
import EduMathQ2 from './assets/component/page/edu/EduMath/EduMathQ2.jsx';
import EduMathQ3 from './assets/component/page/edu/EduMath/EduMathQ3.jsx';

import Leaning from './assets/component/page/learning/learning';
import EduVideo from './assets/component/page/eduVideo/eduVideo';
import Ask from './assets/component/page/ask/ask.jsx';
import Faq from './assets/component/page/faq/faq.jsx';
import EduVideoDetail from './assets/component/page/eduVideo/eduVideoDetail.jsx';



function App() {
  const [page, setPage] = useState(true);
  // 카카오 로그인-------------------------------------------------------------
  const { user, initKakao, kakaoLogin, kakaoLogout } = kakaos()
  // -------------------------------------------------------------------------

  return (
    <>
    {page == true ?
    <>
      <Header setPage={setPage} user={user} kakaoLogout={kakaoLogout}/>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/login" element={<Login kakaoLogin={kakaoLogin}/>}/>
          <Route path="/join" element={<Join />}/>
          <Route path="/mypage" element={<Profile user={user}/>}/>
          <Route path="/mypage/learning" element={<Leaning />}/>
          <Route path="/mypage/point" element={<Point />}/>
          <Route path="/mypage/ask" element={<Ask />}/>
          <Route path="/noticeList" element={<NoticeList />}/>
          <Route path="/detail/:id" element={<NoticeDetail />}/>
          <Route path="/faq" element={<Faq />}/>
          <Route path="/write" element={<NoticeWrite />}/>
          <Route path="/mypage/learning" element={<Leaning />}/>
          <Route path="/catch" element={<Catch />}/>
        </Routes>
      <Footer />
    </>
    :
    <>
      <Routes>
          <Route path='/education' element={<EduMain setPage={setPage} user={user}/>} />
          <Route path='/education/today' element={<EduToday setPage={setPage} user={user} />} />
          <Route path='/education/today/:unitId' element={<EduTodayCont data={eduContents} qDatas={qDatas} setPage={setPage} user={user} />} />
          <Route path='/education/today/:unitId/1' element={<EduMathQ1 setPage={setPage} user={user} />} />
          <Route path='/education/today/:unitId/2' element={<EduMathQ2 setPage={setPage} user={user} />} />
          <Route path='/education/today/:unitId/3' element={<EduMathQ3 setPage={setPage} user={user} />} />
          <Route path="/eduVideo" element={<EduVideo setPage={setPage} user={user} />}/>
          <Route path="/eduVideo/:id" element={<EduVideoDetail setPage={setPage} user={user} />}/>
      </Routes>
    </>
    }
    </>
  )
}

export default App;