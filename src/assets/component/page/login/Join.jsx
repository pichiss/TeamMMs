import { Link } from 'react-router-dom';

function Join(){
    function ale(){
        alert('가입되었습니다');
    }
    
    
    return(
    <section className='Login'>
        <div className='LoginWrap'>
            <div className='JoinTit'>
                <h1>회원가입</h1>
                <p>계정정보를 입력해 주세요.</p>
            </div>
            <form>
                <div className='JoinInput'>
                    <div>
                        <label>이름</label>
                        <input type='text' placeholder="이름을 입력하세요"/>
                    </div>
                    <div>
                        <label>아이디(이메일을 아이디로 입력해 주세요)</label>
                        <input type='text' placeholder="Catch!Math_Monsters@M&M’s.co.kr"/>
                    </div>
                    <div>
                        <label>비밀번호(6글자 이상으로 입력하세요)</label>
                        <input type='password' placeholder="비밀번호를 입력해주세요"/>
                        <input type='password' placeholder="비밀번호 확인"/>
                    </div>
                    <div>
                        <label>휴대폰</label>
                        <input type='number' placeholder="' - ' 빼고 숫자만 입력"/>
                    </div>
                </div>
                <div className='JoinCheck'>
                    <div>
                        <input type="checkbox" name="service" id="service"/>
                        <label><span>(필수)</span> 서비스 이용약관 &#10095;</label>
                    </div>
                    <div>
                        <input type="checkbox" name="personal" value="personal" id="personal"/>
                        <label><span>(필수)</span> 개인정보 수집 이용 동의 &#10095;</label>
                    </div>
                    <div>
                        <input type="checkbox" name="event" value="event" id="event"/>
                        <label><span>(선택)</span> 이벤트 수신 동의 &#10095;</label>
                    </div>
                </div>
                <div className='JoinBtn'>
                    <button onClick={ale}>가입하기</button>
                </div>
            </form>
        </div>
    </section>
    )
}

export default Join