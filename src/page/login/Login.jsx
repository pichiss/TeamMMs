import { Link } from 'react-router-dom';

import './login.css'
import banner from '../../assets/img/loginBanner.png'
import kakao from '../../assets/img/icon/kakao.png';
import naver from '../../assets/img/icon/naver.png';

function Login({kakaoLogin}){
    // 아이디, 비밀번호 찾기
    function find(){
        alert('준비중입니다')
    }
    
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
                    <button className='LoginBtn' onClick={find}>로그인하기</button>
                </form>
                <div className='LoginSns'>
                    <button className='LoginKakao'>
                        <img src={kakao} alt='kakao login'/>
                        <p onClick={kakaoLogin}>카카오 로그인</p>
                    </button>
                </div>
                <div className='LoginStart'>
                    <p onClick={find}>아이디/비밀번호를 잊으셨나요?</p>
                    <p>처음이신가요?<Link to='/join'><span>회원가입</span></Link></p>
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