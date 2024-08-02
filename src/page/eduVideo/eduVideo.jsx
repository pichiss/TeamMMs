import './eduVideoStyle.css'
import { Link } from 'react-router-dom';

import EduHeader from '../edu/EduHeader';
import EduVideoDatas from './eduVideoData';
import EduFooter from '../edu/EduFooter';

export default function EduVideo({ setPage, user, point, setHelpPop }) {



    return (
        <section className='eduViedosWrap'>
            <EduHeader setPage={setPage} user={user} point={point} setHelpPop={setHelpPop} />
            <div className='eduViedosCover'>
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
            <div>
                <EduFooter />
            </div>
        </section>
    );
}
