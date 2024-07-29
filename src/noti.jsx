import { useState, useEffect, createContext, useReducer , useRef, useCallback, useMemo} from 'react'

export const notifunc = ()=>{
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
// ------------------------------------------------------------------------
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
// ------------------------------------------------------------------------

const memoNoti = useMemo(() => {
    return { user, kakaoLogin, kakaoLogout };
}, []);

  return[memoNoti]
  
}

