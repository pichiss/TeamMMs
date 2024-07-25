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
import EduMathQ2 from './assets/component/page/edu/EduMath/EduMathQ2.jsx';
import EduMathQ3 from './assets/component/page/edu/EduMath/EduMathQ3.jsx';

import Leaning from './assets/component/page/learning/learning';
import EduVideo from './assets/component/page/eduVideo/eduVideo';

import './reset.css'
import './App.css'
import Ask from './assets/component/page/ask/ask.jsx';
import AskNew from './assets/component/page/ask/askboard/askNew.jsx';
import Faq from './assets/component/page/faq/faq.jsx';

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
      console.log(`kakao 초기화 ${Kakao.isInitialized()}`);
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


  return (
    <>

    {page == true ?
    <>
      <Header setPage={setPage}/>
      {console.log(page)}
        <Routes>
          <Route path="/TeamMMs/" element={<Main />}/>
          <Route path="/TeamMMs/login" element={<Login />}/>
          <Route path="/TeamMMs/join" element={<Join />}/>
          <Route path="/TeamMMs/mypage" element={<Profile />}/>
          <Route path="/TeamMMs/" element={<Main />}/>
          <Route path="/TeamMMs/login" element={<Login />}/>
          <Route path="/TeamMMs/join" element={<Join />}/>
          <Route path="/TeamMMs/mypage" element={<Profile />}/>
          <Route path='/education' element={<EduMain />} />
          <Route path='/education/today' element={<EduToday />} />
          <Route path='/education/today/:unitId' element={<EduTodayCont data={eduContents} qDatas={qDatas} />} />
          <Route path='/education/today/:unitId/1' element={<EduMathQ1 />} />
        </Routes>
      <Footer />
    </>
    :
    <>
      <Routes>
          <Route path='/education' element={<EduMain setPage={setPage}/>} />
          <Route path='/education/today' element={<EduToday />} />
          <Route path='/education/today/:unitId' element={<EduTodayCont data={eduContents} qDatas={qDatas} />} />
          <Route path='/education/today/:unitId/1' element={<EduMathQ1 />} />
          <Route path='/education/today/:unitId/2' element={<EduMathQ2 />} />
          <Route path='/education/today/:unitId/3' element={<EduMathQ3 />} />
          <Route path="/eduVideo" element={<EduVideo />}/>
      </Routes>
    </>
    }
    </>
  )
}

export default App;