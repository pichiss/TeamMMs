import './eduVideoStyle.css';
import '../edu/EduMath/EduMathQ.css';
import { useParams } from 'react-router-dom';
import { AskIcon } from '../../../img/img';

import EduHeader from '../edu/EduHeader';
import EduVideoDatas from './eduVideoData';
import EduFooter from '../edu/EduFooter';

export default function EduVideoDetail({ setPage, user, point }) {

    const { id } = useParams();

    return (
        <section className='innereduViedosWrap'>
            <EduHeader setPage={setPage} user={user} point={point} />
            <div className='eduViedoNowWrap'>
                <div className='flex eduViedoNow'>
                    <video src={EduVideoDatas[id].vSource} controls autoPlay></video>
                    <div className='askIconWrap'>
                        <div className='askIcon'>
                            <img src={AskIcon} alt="질문하기" />
                            <h3>질문하기</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='eduViedosFooter'>
            <EduFooter/>
            </div>
        </section>
    );
}
