import { Link } from 'react-router-dom';
import pf_bg from '../../../img/profile_bg.svg';
import pt_bg from '../../../img/point_bg.svg';
import question from '../../../img/icon/question.png';
import door from '../../../img/icon/door.png';
import './EduHeader.css';

function EduHeader(){
    return(
        <article className='flex eduProfile'>
            <div className='eduPfL'>
                <h2>금주</h2>
                <p>1레벨 1단원</p>
                <img src={pf_bg} alt="profile-background-image" />
            </div>
            <div className='flex eduPfR'>
                <div className='eduPtWrap'>
                    <h2>1,000p</h2>
                    <img src={pt_bg} alt="point" />
                </div>
                <div className='eduHelpWrap'>
                    <h2>도움말</h2>
                    <div className='flex eduCircle'>
                        <img src={question} alt="help-button" className='helpBtn' />
                    </div>
                </div>
                <div className='eduExitWrap'>
                    <h2>나가기</h2>
                    <Link to={'/TeamMMs/'}>
                        <div className='flex eduCircle'>
                            <img src={door} alt="exit-button" className='exitBtn' />
                        </div>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default EduHeader;