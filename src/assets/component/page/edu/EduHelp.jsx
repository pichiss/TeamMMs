import HelpSec1 from './EduHelpSec/HelpSec1';
import HelpSec2 from './EduHelpSec/HelpSec2';
import HelpSec3 from './EduHelpSec/HelpSec3';
import HelpSec4 from './EduHelpSec/HelpSec4';
import HelpSec5 from './EduHelpSec/HelpSec5';

import './EduHelpSec/eduHelp.css'

import close from '../../../img/icon/x_yellow.png';


function EduHelp({setHelpPop}){
    return(
        <section className='eduHelpPopWrap'>
            <article className='eHPop'>
                <div className='eHHeader'>
                    <ul>
                        <li><p>캐치 홈</p></li>
                        <li><p>오늘의 학습</p></li>
                        <li><p>학습영상</p></li>
                        <li><p>오답노트</p></li>
                        <li><p>포인트샵</p></li>
                    </ul>
                </div>
                <div>
                    useState로 헬프섹션 네비 클릭하면 나오도록
                    <HelpSec1/>
                </div>
            </article>
            <div className='eHPopClose' onClick={()=>setHelpPop(false)}>
                <img src={close} alt='close'/>
            </div>
        </section>
    )
}

export default EduHelp;