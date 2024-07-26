import './eduVideoStyle.css';
import '../edu/EduMath/EduMathQ.css';
import { useParams } from 'react-router-dom';
import { AskIcon } from '../../../img/img';

import EduHeader from '../edu/EduHeader';
import EduVideoDatas from './eduVideoData';

export default function EduVideoDetail({ setPage }) {

    const { id } = useParams();

    return (
        <section className='eduViedosWrap innereduViedosWrap'>
            <EduHeader setPage={setPage} />
            <div className='eduViedoNowWrap'>
                <div className='flex eduViedoNow'>
                    <video src={EduVideoDatas[id].vSource} controls></video>
                    <div className='askIconWrap'>
                        <div className='askIcon'>
                            <img src={AskIcon} alt="질문하기" />
                            <h3>질문하기</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
