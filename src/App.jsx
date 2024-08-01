import './reset.css'
import './App.css'

import { Route, Routes } from 'react-router-dom';
import { eduContents, qDatas } from './assets/page/edu/eduData.jsx';
import { useState, useEffect, createContext, useReducer } from 'react'
import { kakaos } from './loginData/kakao.jsx'

import Header from './assets/component/header/Header'
import Footer from './assets/component/footer/footer';

import Main from './assets/page/main/Main'
import Login from './assets/page/login/Login'
import Join from './assets/page/login/Join'
import Catch from './assets/page/catch/catch.jsx'


import NoticeList from './assets/page/notice/noticeList';
import NoticeDetail from './assets/page/notice/noticeDetail';
import NoticeWrite from './assets/page/notice/noticeWrite';
import Profile from './assets/page/mypage/profile'
import Point from './assets/page/mypage/point.jsx';

import EduMain from './assets/page/edu/EduMain.jsx';
import EduToday from './assets/page/edu/EduToday.jsx';
import EduTodayCont from './assets/page/edu/EduTodayCont.jsx';
import EduMathQ1 from './assets/page/edu/EduMath/EduMathQ1.jsx';
import EduMathQ2 from './assets/page/edu/EduMath/EduMathQ2.jsx';
import EduMathQ3 from './assets/page/edu/EduMath/EduMathQ3.jsx';
import EduMathQ11 from './assets/page/edu/EduMath/EduMathQ11.jsx';
import AskFunc from './askFunc.jsx';

import Leaning from './assets/page/learning/learning.jsx';
import EduVideo from './assets/page/eduVideo/eduVideo';
import Ask from './assets/page/ask/ask.jsx';
import AskNew from './assets/page/ask/askboard/askNew.jsx';
import Faq from './assets/page/faq/faq.jsx';
import EduVideoDetail from './assets/page/eduVideo/eduVideoDetail.jsx';

import EduNoteMain from './assets/page/edu/EduNote/EduNote.jsx';
import EduNoteCont from './assets/page/edu/EduNote/EduNoteCont.jsx';
import EduNoteQ1 from './assets/page/edu/EduNote/EduNoteQ1.jsx';

import Notifunc from './noticeFunc.jsx';
import EduPoint from './assets/page/Edupoint/Edupoint.jsx';
import AskDetail from './assets/page/ask/askboard/askDetail.jsx';


//게시판용
export const itemContext = createContext();
export const editAskContext = createContext();
export const noticeContext = createContext();
export const editNotiContext = createContext();



function App() {

  const [page, setPage] = useState(true);
  // 카카오 로그인-------------------------------------------------------------
  const { user, initKakao, kakaoLogin, kakaoLogout } = kakaos()
  // -------------------------------------------------------------------------
  const [point, setPoint] = useState(10000);
  function updateUserPoints(newPoints) {
    setPoint(newPoints);
  }

  //게시판
  const [memoNoti, datas] = Notifunc();

  // 1:1 게시판
  const [memoAsk, items] = AskFunc();

  return (
    <>
    {page == true ?
        <>
        <noticeContext.Provider value={datas}>
          <editNotiContext.Provider value={memoNoti}>
          <itemContext.Provider value={items}>
            <editAskContext.Provider value={memoAsk}>
          <Header setPage={setPage} user={user} kakaoLogout={kakaoLogout} point={point} />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login kakaoLogin={kakaoLogin} />} />
            <Route path="/join" element={<Join />} />
            <Route path="/mypage" element={<Profile user={user} />} />
            <Route path="/mypage/learning" element={<Leaning />} />
            <Route path="/mypage/point" element={<Point  point={point} />} />
            <Route path="/mypage/ask" element={<Ask />} />
            <Route path="/mypage/ask/detail/:id" element={<AskDetail />} />
            <Route path="/mypage/askNew" element={<AskNew />} />
            <Route path="/noticeList" element={<NoticeList />} />
            <Route path="/detail/:id" element={<NoticeDetail />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/write" element={<NoticeWrite />} />
            <Route path="/catch" element={<Catch />} />
          </Routes>

          <Footer />
          </editAskContext.Provider>
            </itemContext.Provider>
          </editNotiContext.Provider>
        </noticeContext.Provider>
        </>
    :
      <>
        <Routes>
          <Route path='/education' element={<EduMain setPage={setPage} user={user} point={point}/>} />
          <Route path='/education/today' element={<EduToday setPage={setPage} user={user} point={point}/>} />
          <Route path='/education/today/:unitId' element={<EduTodayCont data={eduContents} qDatas={qDatas} setPage={setPage} user={user} point={point}/>} />
          <Route path='/education/today/:unitId/1' element={<EduMathQ1 setPage={setPage} user={user} point={point}/>} />
          <Route path='/education/today/:unitId/2' element={<EduMathQ2 setPage={setPage} user={user} point={point}/>} />
          <Route path='/education/today/:unitId/3' element={<EduMathQ3 setPage={setPage} user={user} point={point}/>} />
          <Route path='/education/today/:unitId/11' element={<EduMathQ11 setPage={setPage} user={user} point={point}/>} />
          <Route path="/education/note" element={<EduNoteMain setPage={setPage} user={user} point={point} />} />
          <Route path="/education/note/:unitId" element={<EduNoteCont data={eduContents} qDatas={qDatas} setPage={setPage} user={user} point={point} />} />
          <Route path="/education/note/:unitId/1" element={<EduNoteQ1 data={eduContents} qDatas={qDatas} setPage={setPage} user={user} point={point} />} />
          <Route path="/eduVideo" element={<EduVideo setPage={setPage} user={user} point={point}/>}/>
          <Route path="/eduVideo/:id" element={<EduVideoDetail setPage={setPage} user={user} point={point}/>}/>
          <Route path="/eduPoint" element={<EduPoint setPage={setPage} user={user} point={point} updateUserPoints={updateUserPoints}/>}/>
        </Routes>
      </>
    }
    </>
  )
}

export default App;