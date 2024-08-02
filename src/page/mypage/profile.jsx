import Subnav from "../../component/common/Subnav";
import './profile.css'
import { useState } from "react";
import SubHead from "../../component/common/Subhead";


function Profile({user}){
    let grade = '5학년'
    let passWord = '*********';
    let phone = '010-1234-5678';
    let email = 'pie0716@naver.com';

    const [update, setUpdate] = useState(true);
    const [editGrade, setEditGrade] = useState(grade);
    const [editPass, setEditPass] = useState(passWord);
    const [editPhone, setEditPhone] = useState(phone);
    const [editEmail, setEditEmail] = useState(email);

function editBtn(){
    setUpdate(!update)
}
function editChange(g){
setEditGrade(g.target.value)
}
function editChangepass(p){
    setEditPass(p.target.value)
    }

function editChangenum(n){
    setEditPhone(n.target.value)
    }
function editChangemail(m){
    setEditEmail(m.target.value)
}
function saveBtn(){
if(window.confirm(`변경 하시겠습니까?`)){
    editBtn()
 }
}
function cancleBtn(){
setUpdate(!update)
}

function expend(){
    window.confirm(`연장 하시겠습니까?`)
}

    // 별표 만들기 금주랑 채민이가 함.
    const use_for = () => {
        const result = [];

        for (let i = 0; i < editPass.length; i++) {      
            result.push('*');    
        }     

        return result;
    };

    return(
        <section>
            <SubHead chara={1} />
            <article className="w1440 flex pa55 profileblock">
            <Subnav key={1} tit='학부모 코너' id='1'/>
            <div className="profileBox">
            <div>
            <h2>내 정보</h2>
                <div className="flex proFirst bgBlue">
                    <h3>내 정보</h3>
                    {update ? <button className="bluelineBtn" onClick={editBtn}>변경</button> :
                    <>  
                    <div>
                    <button className="bluelineBtn" onClick={saveBtn}>저장</button>
                    <button className="bluelineBtn" onClick={cancleBtn}>취소</button>
                    </div> 
                    </> }
                </div>
                <div className="profilWrap"> 
                    <div>
                        <img src={user.profileImg} alt='my img'/>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <td className="silver">아이디</td>
                            <td>pie0716</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="silver">이름</td>
                            <td>{user.nickname}</td>
                        </tr>
                        <tr>
                            <td className="silver">학년</td>       
                            {update ?         
             <td>{editGrade}</td>   
            : 
            <td>
                <select name="grade" id="grade" value={editGrade} onChange={editChange}>
                    <option value="1학년">1학년</option>
                    <option value="2학년">2학년</option>
                    <option value="3학년">3학년</option>
                    <option value="4학년">4학년</option>
                    <option value="5학년">5학년</option>
                    <option value="6학년">6학년</option>
                </select>
 
        </td>
            } 
                        </tr>
                        <tr>
                            <td className="silver">비밀번호</td>
                            {update ?         
             <td>{use_for()}</td>   
            : 
                <td>
                    <input type="password" className="editText" name="password" value={editPass} onChange={editChangepass}></input>  
                </td>
            }

                        </tr>
                        <tr>
                            <td className="silver">전화번호</td>
                            {update ?         
             <td>{editPhone}</td>   
            : 
                <td>
                    <input type="text" className="editText" name="phone" value={editPhone} onChange={editChangenum}></input> 
                </td>
            }
                        </tr>
                        <tr>
                            <td className="silver">이메일</td>
                            {update ?         
             <td>{editEmail}</td>   
            : 
                <td>
                    <input type="text" className="editText" name="email" value={editEmail} onChange={editChangemail}></input>
                </td>
            }
                        </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <table className="subscription">
                    <thead>
                    <tr className="bgBlue">
                        <td className="leftBorderRadius subNone">상태</td>
                        <td>이용권 이름</td>
                        <td>이용 기간</td>
                        <td className="rightBorderRadius">연장</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="subNone">이용중</td>
                        <td>12개월 이용권</td>
                        <td>~2024.08.09</td>
                        <td className="expend" onClick={expend}><span className="bluelineBtn">연장</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </article>
          
        </section>
    )
}

export default Profile;