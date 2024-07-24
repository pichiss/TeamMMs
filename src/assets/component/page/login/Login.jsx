import { Link } from 'react-router-dom';
import { useEffect } from 'react';


import { useNavigate } from "react-router-dom";
import axios from "axios";


import './login.css'
import logo from '../../../img/로고2.png'
import banner from '../../../img/loginBanner.png'
import kakao from '../../../img/icon/kakao.png';
import naver from '../../../img/icon/naver.png';

function Login(){
    // 아이디, 비밀번호 찾기
    function find(){
        alert('준비중입니다')
    }

    // 카카오 로그인
    const rest_api_key = 'c230ab311b8ed611761dd92a2a0d5136';
    const redirect_url = 'http://localhost:5173';
    const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${rest_api_key}&redirect_uri=${redirect_url}&response_type=code`;
    const client_secret = process.env.REACT_APP_CLIENT_SECRET;
    const code = new URL(window.location.href).searchParams.get("code");

    const navigate = useNavigate();
    
    function kakaoLogin(){
        window.location.href = kakaoUrl;
    }

    console.log(code)



    return(
    <section className='Login'>
        <div className='LoginWrap'>
            <div className='LoginInfo'>
                <form>
                    <div className='LoginInput'>
                            <div>
                                <label>아이디</label>
                                <input type='text' placeholder="아이디를 입력해주세요"/>
                            </div>
                            <div>
                                <label>비밀번호</label>
                                <input type='password' placeholder="비밀번호를 입력해주세요"/>
                            </div>
                    </div>
                    <button className='LoginBtn'>로그인하기</button>
                </form>
                <div className='LoginSns'>
                    <button className='LoginKakao'>
                        <img src={kakao} alt='kakao login'/>
                        <p onClick={kakaoLogin}>카카오 로그인</p>
                    </button>
                    <button className='LoginNaver'>
                        <img src={naver} alt='naver login'/>
                        <p>네이버 로그인</p>
                    </button>
                </div>
                <div className='LoginStart'>
                    <p onClick={find}>아이디/비밀번호를 잊으셨나요?</p>
                    <p>처음이신가요?<Link to='/TeamMMs/join'><span>회원가입</span></Link></p>
                </div>
            </div>
            <div className='LoginBanner'>
                <img src={banner} alt='banner'/>
            </div>
        </div>
    </section>
    )
}
export default Login;