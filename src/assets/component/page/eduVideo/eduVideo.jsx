import './eduVideoStyle.css'

import EduHeader from '../edu/EduHeader';
import EduVideoDatas from './eduVideoData';

export default function EduVideo() {



    return (
        <section className='eduViedosWrap'>
        <EduHeader/>
        <h2>학습영상</h2>
            {EduVideoDatas.map((data)=>
            <div key={data.id} className='flex eduVideos'>
                <div><img src={data.thumbnail} alt="thumbnail" /></div>
                    <ul>
                        <li>{data.mTit}</li>
                        <li>{data.subTit}</li>
                    </ul>
            </div>
            )}
        </section>
    );
}
