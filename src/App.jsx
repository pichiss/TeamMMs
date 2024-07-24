import './reset.css'
import './App.css'

import { Route, Routes, Link } from 'react-router-dom';
import { eduContents, qDatas } from './assets/component/page/edu/eduData.js';
import { useState, useEffect, createContext } from 'react'

import Header from './assets/component/header/Header'
import Main from './assets/component/page/main/Main'
import Login from './assets/component/page/login/Login'
import Join from './assets/component/page/login/Join'
import Footer from './assets/component/footer/footer';


import NoticeList from './assets/component/page/noitce/noticeList';
import NoticeDetail from './assets/component/page/noitce/noticeDetail';
import NoticeWrite from './assets/component/page/noitce/noitceWrite';
import Profile from './assets/component/page/mypage/profile'

import EduMain from './assets/component/page/edu/EduMain.jsx';
import EduToday from './assets/component/page/edu/EduToday.jsx';
import EduTodayCont from './assets/component/page/edu/EduTodayCont.jsx';
import EduMathQ1 from './assets/component/page/edu/EduMath/EduMathQ1.jsx';

import Leaning from './assets/component/page/learning/learning';

function App() {
  const [page, setPage] = useState(true);


  return (
    <>

    {page == true ?
    <>
      <Header setPage={setPage}/>
      {console.log(page)}
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/join" element={<Join />}/>
          <Route path="/mypage" element={<Profile />}/>
          <Route path='/education' element={<EduMain />} />
          <Route path='/education/today' element={<EduToday />} />
          <Route path='/education/today/:unitId' element={<EduTodayCont data={eduContents} qDatas={qDatas} />} />
          <Route path='/education/today/:unitId/1' element={<EduMathQ1 />} />
          <Route path="/noticeList" element={<NoticeList />}/>
          <Route path="/detail/:id" element={<NoticeDetail />}/>
          <Route path="/write" element={<NoticeWrite />}/>
          <Route path="/learning" element={<Leaning />}/>
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

export default App;