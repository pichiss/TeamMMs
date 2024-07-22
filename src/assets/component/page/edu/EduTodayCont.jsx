import { useParams } from 'react-router-dom';
import EduHeader from './EduHeader.jsx';
import EduFooter from './EduFooter.jsx';
import spring from '../../../img/note_spring.png';
import './EduTodayCont.css';

function EduTodayCont(props){

    const {unitId} = useParams();
    const data = props.data;

    return(
        <section className='eduTodaySec'>
            <EduHeader />
            <article className='flex eduUnitWrap'>
                <div className='eduUnitL'>
                    <div className='eduMainUnit'>
                        <h2>1. 수의 범위와 어림하기</h2>
                    </div>
                    <div className='flex eduSubUnit'>
                        <div className='flex eduSubUnitBox'>
                            <div></div>
                            <h3>1. 이상, 이하</h3>
                        </div>
                        <div className='flex eduSubUnitBox'>
                            <div></div>
                            <h3>1. 이상, 이하</h3>
                        </div>
                        <div className='flex eduSubUnitBox'>
                            <div></div>
                            <h3>1. 이상, 이하</h3>
                        </div>
                        <div className='flex eduSubUnitBox'>
                            <div></div>
                            <h3>1. 이상, 이하</h3>
                        </div>
                    </div>
                </div>
                <img src={spring} alt="스프링크기수정&위에거테스트용이고맵돌릴거임" />
                <div className='eduUnitR'>
                </div>
            </article>
            <EduFooter />
        </section>
    )
}

export default EduTodayCont;