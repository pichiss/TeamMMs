import './reset.css'
import './App.css'

import { Route, Routes } from 'react-router-dom';
import { eduContents, qDatas } from './assets/component/page/edu/eduData.js';
import { useState, useEffect, createContext } from 'react'

import Header from './assets/component/header/Header'
import Main from './assets/component/page/main/Main'
import Login from './assets/component/page/login/Login'
import Join from './assets/component/page/login/Join'
import Catch from './assets/component/page/catch/catch.jsx'
import Footer from './assets/component/footer/footer';


import NoticeList from './assets/component/page/notice/noticeList';
import NoticeDetail from './assets/component/page/notice/noticeDetail';
import NoticeWrite from './assets/component/page/notice/noticeWrite';
import Profile from './assets/component/page/mypage/profile'
import Point from './assets/component/page/mypage/point.jsx';

import EduMain from './assets/component/page/edu/EduMain.jsx';
import EduToday from './assets/component/page/edu/EduToday.jsx';
import EduTodayCont from './assets/component/page/edu/EduTodayCont.jsx';
import EduMathQ1 from './assets/component/page/edu/EduMath/EduMathQ1.jsx';
import EduMathQ2 from './assets/component/page/edu/EduMath/EduMathQ2.jsx';
import EduMathQ3 from './assets/component/page/edu/EduMath/EduMathQ3.jsx';
import EduMathQ11 from './assets/component/page/edu/EduMath/EduMathQ11.jsx';

import Leaning from './assets/component/page/learning/learning';
import EduVideo from './assets/component/page/eduVideo/eduVideo';
import Ask from './assets/component/page/ask/ask.jsx';
import Faq from './assets/component/page/faq/faq.jsx';
import EduVideoDetail from './assets/component/page/eduVideo/eduVideoDetail.jsx';

import EduNoteMain from './assets/component/page/edu/EduNote/EduNote.jsx';
import EduNoteCont from './assets/component/page/edu/EduNote/EduNoteCont.jsx';

import Notifunc from './noticeFunc.jsx';
import EduPoint from './assets/component/page/Edupoint/Edupoint.jsx';
import AskFunc from './askFunc.jsx';

//게시판용
export const itemContext = createContext();
export const editAskContext = createContext();
export const noticeContext = createContext();
export const editNotiContext = createContext();



function App() {

  const [page, setPage] = useState(true);
  // 카카오 로그인-------------------------------------------------------------
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const { Kakao } = window;
  const initKakao = async () => {
    const jsKey = "9f5304fbac21cb4ee421113d0f2f7bab";
    if (Kakao && !Kakao.isInitialized()) {
      await Kakao.init(jsKey);
      // console.log(`kakao 초기화 ${Kakao.isInitialized()}`);
    }
  };
  const kakaoLogin = async () => {
    await Kakao.Auth.login({
      success(res) {
        console.log(res);
        Kakao.Auth.setAccessToken(res.access_token);
        // console.log("카카오 로그인 성공");

        Kakao.API.request({
          url: "/v2/user/me",
          success(res) {
            // console.log("카카오 인가 요청 성공");
            setIsLogin(true);
            const kakaoAccount = res.kakao_account;
            localStorage.setItem(
              "profileImg",
              kakaoAccount.profile.profile_image_url
            );
            localStorage.setItem("nickname", kakaoAccount.profile.nickname);
            window.location.href = "http://localhost:5173/";
          },
          fail(error) {
            console.log(error);
          },
        });
      },
      fail(error) {
        console.log(error);
      },
    });
  };

  const kakaoLogout = () => {
    Kakao.Auth.logout((res) => {
      console.log(Kakao.Auth.getAccessToken());
      console.log(res);
      localStorage.removeItem("profileImg");
      localStorage.removeItem("nickname");
      setUser(null);
    });
  };

  useEffect(() => {
    initKakao();
    Kakao.Auth.getAccessToken() ? setIsLogin(true) : setIsLogin(false);
  }, []);

  useEffect(() => {
    if (isLogin) {
      setUser({
        profileImg: localStorage.getItem("profileImg"),
        nickname: localStorage.getItem("nickname"),
      });
    }
  }, [isLogin]);

  // -------------------------------------------------------------------------
  const [point, setPoint] = useState(10000);
  function updateUserPoints(newPoints) {
    setPoint(newPoints);
  }

  //게시판
  const [memoNoti, datas] = Notifunc();

  // 1:1 게시판
  const [memoAsk, item] = AskFunc();

  return (
    <>
      {page == true ?
        <>
        <noticeContext.Provider value={datas}>
          <editNotiContext.Provider value={memoNoti}>
          <itemContext.Provider value={item}>
            <editAskContext.Provider value={memoAsk}>
          <Header setPage={setPage} user={user} kakaoLogout={kakaoLogout} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login kakaoLogin={kakaoLogin} />} />
            <Route path="/join" element={<Join />} />
            <Route path="/mypage" element={<Profile user={user} />} />
            <Route path="/mypage/learning" element={<Leaning />} />
            <Route path="/mypage/point" element={<Point />} />
            <Route path="/mypage/ask" element={<Ask />} />
            <Route path="/noticeList" element={<NoticeList />} />
            <Route path="/detail/:id" element={<NoticeDetail />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/write" element={<NoticeWrite />} />
            <Route path="/mypage/learning" element={<Leaning />} />
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