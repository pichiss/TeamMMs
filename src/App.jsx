import './reset.css'
import './App.css'

import { Route, Routes } from 'react-router-dom';
import { eduContents, qDatas } from './page/edu/eduData.jsx';
import { useState, createContext } from 'react'
import { kakaos } from './loginData/kakao.jsx'

import Header from './component/header/Header'
import Footer from './component/footer/footer';

import Main from './page/main/Main.jsx'
import Login from './page/login/Login'
import Join from './page/login/Join'
import Catch from './page/catch/catch.jsx'


import NoticeList from './page/notice/noticeList';
import NoticeDetail from './page/notice/noticeDetail';
import NoticeWrite from './page/notice/noticeWrite';
import Profile from './page/mypage/profile'
import Point from './page/mypage/point.jsx';

import EduMain from './page/edu/EduMain.jsx';
import EduToday from './page/edu/EduToday.jsx';
import EduTodayCont from './page/edu/EduTodayCont.jsx';
import EduMathQ1 from './page/edu/EduMath/EduMathQ1.jsx';
import EduMathQ2 from './page/edu/EduMath/EduMathQ2.jsx';
import EduMathQ3 from './page/edu/EduMath/EduMathQ3.jsx';
import EduMathQ11 from './page/edu/EduMath/EduMathQ11.jsx';
import AskFunc from './askFunc.jsx';

import Leaning from './page/learning/learning.jsx';
import EduVideo from './page/eduVideo/eduVideo';
import Ask from './page/ask/ask.jsx';
import AskNew from './page/ask/askboard/askNew.jsx';
import Faq from './page/faq/faq.jsx';
import EduVideoDetail from './page/eduVideo/eduVideoDetail.jsx';

import EduNoteMain from './page/edu/EduNote/EduNote.jsx';
import EduNoteCont from './page/edu/EduNote/EduNoteCont.jsx';
import EduNoteQ1 from './page/edu/EduNote/EduNoteQ1.jsx';

import Notifunc from './noticeFunc.jsx';
import EduPoint from './page/Edupoint/Edupoint.jsx';
import AskDetail from './page/ask/askboard/askDetail.jsx';

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
            <Route path="/" element={<Main user={user} setPage={setPage}/>} />
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