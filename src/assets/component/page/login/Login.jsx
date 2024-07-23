import { Link } from 'react-router-dom';

import './login.css'
import logo from '../../../img/logo.png'
import banner from '../../../img/loginBanner.png'
import kakao from '../../../img/icon/kakao.png';
import naver from '../../../img/icon/naver.png';


function Login(){
    function find(){
        alert('준비중입니다')
    }

    return(
    <Link to='/TeamMMs/login'>
    <section className='Login'>
        <div className='LoginWrap'>
            <div className='LoginInfo'>
                <div className='LoginInput'>
                    <form>
                        <label>아이디</label>
                        <input type='text' placeholder="아이디를 입력해주세요"/>
                    </form>
                    <form>
                        <label>비밀번호</label>
                        <input type='password' placeholder="비밀번호를 입력해주세요"/>
                    </form>
                </div>
                <button className='LoginBtn'>로그인하기</button>
                <div className='LoginSns'>
                    <button className='LoginKakao'>
                        <img src={kakao} alt='kakao login'/>
                        <p>카카오 로그인</p>
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
    </Link>
    )
}
export default Login;