import Subnav from "../../common/Subnav";
import profilePhoto from '../../../img/profile.svg'
import './profile.css'

function Profile(){
    return(
        <section className="w1440 flex pa60">
            <Subnav tit={'학부모코너'}/>
            <div className="profileBox">
            <h2>내 정보</h2>
            <div>
                <h3 className="bgBlue">내 정보</h3>
                <div className="profilWrap"> 
                    <img src={profilePhoto} alt="profile Photo" />
                    <table>
                        <tr>
                            <td className="silver">아이디</td>
                            <td>pie0716</td>
                        </tr>
                        <tr>
                            <td className="silver">이름</td>
                            <td>파이</td>
                        </tr>
                        <tr>
                            <td className="silver">학년</td>
                            <td>5학년<button className="bluelineBtn">변경</button></td>
                        </tr>
                        <tr>
                            <td className="silver">비밀번호</td>
                            <td>*************<button className="bluelineBtn">변경</button></td>
                        </tr>
                        <tr>
                            <td className="silver">전화번호</td>
                            <td>010-8282-8282<button className="bluelineBtn">변경</button></td>
                        </tr>
                        <tr>
                            <td className="silver">이메일</td>
                            <td>pie0716@naver.com<button className="bluelineBtn">변경</button></td>
                        </tr>
                    </table>
                </div>
                </div>
            {/* <div> */}
                <table className="subscription">
                    <tr className="bgBlue">
                        <td className="bgBlue">상태</td>
                        <td>이용권 이름</td>
                        <td>이용 기간</td>
                        <td className="bgBlue">연장</td>
                    </tr>
                    <tr>
                        <td>이용중</td>
                        <td>캐치! 수학 몬스터즈 12개월 이용권</td>
                        <td>~2024.08.09</td>
                        <td>연장하기</td>
                    </tr>
                </table>
            {/* </div> */}
            </div>
        </section>
    )
}

export default Profile;