import { useNavigate } from 'react-router-dom';
import back from '../../img/icon/back.png';
import './EduFooter.css'

function EduFooter(){

    const navigate = useNavigate();

    const onClickBack = ()=>{
        navigate(-1);
    }

    return(
        <article className='flex eduFooter'>
            <div className='eduBackWrap'>
                <h2>뒤로가기</h2>
                <div className='flex eduCircle' onClick={onClickBack}>
                    <img src={back} alt="back-button" className='backBtn' />
                </div>
            </div>
        </article>
    )
}

export default EduFooter;