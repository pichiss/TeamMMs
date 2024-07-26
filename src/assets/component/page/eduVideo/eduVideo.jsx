import './eduVideoStyle.css'
import { Link } from 'react-router-dom';

import EduHeader from '../edu/EduHeader';
import EduVideoDatas from './eduVideoData';

export default function EduVideo({ setPage }) {



    return (
        <section className='eduViedosWrap'>
            <EduHeader setPage={setPage} />
            <div className='eduViedosCover pa55'>
            <h2>학습영상</h2>
            <div className='flex w1440 eduViedos'>
                {EduVideoDatas.map((data) =>
                <Link to={`/eduVideo/${data.id}`} key={data.id}>
                <div className='flex eduViedosCont'>
                        <img src={data.thumbnail} alt="thumbnail" />
                        <ul>
                            <li>{data.mTit}</li>
                            <li>{data.subTit}</li>
                        </ul>
                    </div>
                </Link>
                )}
            </div>
            </div>
        </section>
    );
}
