import { useState } from 'react'
import { Link } from 'react-router-dom';
import EduHeader from './EduHeader.jsx';
import video from '../../../img/icon/video.png';
import today from '../../../img/monster/monster2.png';
import note from '../../../img/icon/note.png';
import pointshop from '../../../img/icon/pointshop.png';
import EduHelp from './EduHelpSec/EduHelp.jsx';
import './EduMain.css';

function EduMain({setPage, user, point}){

    let [helpPop, setHelpPop] = useState(false);

    return(
        <section className='eduSec'>
            <EduHeader setPage={setPage} user={user} point={point} setHelpPop={setHelpPop}/>
            <article className="flex eduMenu">
                <Link to='/eduVideo'>
                    <div className="flex eduVideo">
                        <h2>학습영상</h2>
                        <img src={video} alt="education-Video-image" />
                    </div>
                </Link>
                <Link to={'/education/today'}>
                    <div className="flex eduToday">
                        <h2>오늘의 학습</h2>
                        <img src={today} alt="monster-character-image" />
                    </div>
                </Link>
                <div className="eduCont">
                    <Link to={'/education/note'}>
                        <div className='flex eduNote'>
                            <img src={note} alt="note-image" />
                            <h2>오답노트</h2>
                        </div>
                    </Link>
                    <Link to={'/eduPoint'}>
                        <div className='flex eduPoint'>
                            <img src={pointshop} alt="pointshop-image" />
                            <h2>포인트샵</h2>
                        </div>
                    </Link>
                </div>
            </article>
            {helpPop ?
                <EduHelp setHelpPop={setHelpPop}/>
            :
                null
            }
        </section>
    )
}

export default EduMain;