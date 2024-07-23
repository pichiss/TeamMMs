import { Canvas } from '@react-three/fiber';
import EduHeader from '../EduHeader';
import EduMathBlock from './EduMathBlock';
import EduFooter from '../EduFooter';
import spring from '../../../../img/note_spring.png';
import './EduMathQ.css';

function EduMathQ1(){
    return(
        <section className='eduTodaySec'>
            <EduHeader />
            <article className='flex eduUnitWrap'>
                <div className='eduUnitL'>
                    <Canvas camera={{fov: 75, near: 0.1, far: 100, position: [3,3,3]}}>
                        <EduMathBlock />
                    </Canvas>
                </div>
                <img src={spring} alt="note-spring" />
                <div className='eduUnitR'>
                </div>
            </article>
            <EduFooter />
        </section>
    )
}

export default EduMathQ1;