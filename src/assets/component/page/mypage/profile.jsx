import Subnav from "../../common/Subnav";
import profilePhoto from '../../../img/profile.svg'

function Profile(){
    return(
        <section className="w1440 flex">
            <Subnav tit={'학부모코너'}/>
            <h2>내 정보</h2>
            <div>
                <p>내 정보</p>
                <img src={profilePhoto} alt="profile Photo" />
                <table>
                    <tr>
                        <td>이름</td>
                        <td>파이</td>
                    </tr>
                    <tr>
                        <td>아이디</td>
                        <td>파이</td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td>파이</td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td>파이</td>
                    </tr>
                    <tr>
                        <td>와이</td>
                        <td>파이</td>
                    </tr>
                </table>
            </div>
        </section>
    )
}

export default Profile;