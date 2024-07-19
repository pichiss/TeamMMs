import pf_bg from '../../../img/profile_bg.svg';
import pt_bg from '../../../img/point_bg.svg';
import question from '../../../img/icon/question.png';
import door from '../../../img/icon/door.png';
import cc_bg from '../../../img/circle_bg.svg';
import './EduHeader.css';

function EduHeader(){
    return(
        <article className='flex eduProfile'>
            <div>
                <img src={pf_bg} alt="" />
            </div>
            <div className='flex eduPfR'>
                <div className='eduPtWrap'>
                    <h2>1,000p</h2>
                    <img src={pt_bg} alt="point" />
                </div>
                <div className='eduHelpWrap'>
                    <h2>도움말</h2>
                    <img src={question} alt="help-button" className='helpBtn' />
                    <img src={cc_bg} alt="circle-image" className='circle' />
                </div>
                <div className='eduExitWrap'>
                    <h2>나가기</h2>
                    <img src={door} alt="exit-button" className='exitBtn' />
                    <img src={cc_bg} alt="circle-image" />
                </div>
            </div>
        </article>
    )
}

export default EduHeader;