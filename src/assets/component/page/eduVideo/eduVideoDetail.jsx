import './eduVideoStyle.css'
import { useParams } from 'react-router-dom';

import EduHeader from '../edu/EduHeader';
import EduVideoDatas from './eduVideoData';

export default function EduVideoDetail({ setPage }) {

    const { id } = useParams();

    return (
        <section className='eduViedosWrap'>
            <EduHeader setPage={setPage} />
            <h1>{EduVideoDatas[id].subTit}</h1>
        </section>
    );
}
