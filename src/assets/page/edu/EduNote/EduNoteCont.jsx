import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import EduHeader from '../EduHeader.jsx';
import EduFooter from '../EduFooter.jsx';
import pie from '../../../img/monster/monster2.png';
import './EduNoteCont.css';

function EduNoteCont(props){

    const {unitId} = useParams();
    const data = props.data;
    const qDatas = props.qDatas;

    const [onSelect, setSelect] = useState(false);

    function onClickSelect(){
        setSelect(true)
    }

    return(
        <section className='eduNoteSec'>
            <EduHeader setPage={props.setPage} user={props.user} point={props.point} />
            <article className='flex eduUnitWrap'>
                <div className='eduUnitLs'>
                    <div className='eduMainUnits'>
                        <h2>{data[unitId-1].title}</h2>
                    </div>
                    <div className='flex eduSubUnit'>
                        {data[unitId-1].subTitle1 == undefined ? null : 
                        <div className='flex eduSubUnitBoxs'>
                            <div><span className={'' + (onSelect ? 'on' : null)}></span></div>
                            <div>
                                <h3 onClick={onClickSelect}>{data[unitId-1].subTitle1}</h3>
                                <p>{data[unitId-1].wrongQ1}</p>
                            </div>
                        </div>}
                        {data[unitId-1].subTitle2 == undefined ? null : 
                        <div className='flex eduSubUnitBoxs'>
                                <div><span></span></div>
                                <div>
                                    <h3 onClick={onClickSelect}>{data[unitId-1].subTitle2}</h3>
                                    <p>{data[unitId-1].wrongQ2}</p>
                                </div>
                        </div>}
                        {data[unitId-1].subTitle3 == undefined ? null : 
                        <div className='flex eduSubUnitBoxs'>
                                <div><span></span></div>
                                <div>
                                    <h3 onClick={onClickSelect}>{data[unitId-1].subTitle3}</h3>
                                    <p>{data[unitId-1].wrongQ3}</p>
                                </div>
                        </div>}
                        {data[unitId-1].subTitle4 == undefined ? null : 
                            <div className='flex eduSubUnitBoxs'>
                                <div><span></span></div>
                                <div>
                                    <h3 onClick={onClickSelect}>{data[unitId-1].subTitle4}</h3>
                                    <p>{data[unitId-1].wrongQ4}</p>
                                </div>
                            </div>}
                    </div>
                </div>
                <div className='eduUnitRs'>
                    <div className={"flex eduNoSelects " + (onSelect ? "off" : " ")}>
                        <div className='eduSpeechBlns'>
                            <p>
                                난 파이라고 해~
                                <br />틀린 문제를 다시 풀어봐!
                            </p>
                        </div>
                        <img src={pie} alt="monster_image" />
                    </div>
                    <div className={"eduSelects " + (onSelect ? "on" : "off")}>
                        {qDatas.filter((qData)=> qData.id === 1 && qData.answer == false)
                        .map((qData, i) =>
                            <div key={i}>
                                <Link to={`/education/note/${data[unitId-1].unitId}/${i+1}`}>
                                    {qData.question}
                                </Link>
                            </div>)}
                    </div>
                </div>
            </article>
            <EduFooter />
        </section>
    )
}

export default EduNoteCont;