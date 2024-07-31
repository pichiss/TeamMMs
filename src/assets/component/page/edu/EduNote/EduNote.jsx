import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { eduContents } from '../eduData.jsx';
import EduHeader from '../EduHeader.jsx';
import EduFooter from '../EduFooter.jsx';

import firstUnit from '../../../../img/monster/monster5_Ellipse2.png';
import secondUnit from '../../../../img/monster/monster2_Ellipse2.png';
import thirdUnit from '../../../../img/monster/monster3_Ellipse2.png';
import fourthUnit from '../../../../img/monster/bibi_Ellipse2.png';
import fifthUnit from '../../../../img/monster/bossMonster_Ellipse2.png';
import sixthUnit from '../../../../img/monster/kindBoss_Ellipse2.png';

import 'swiper/css';
import './EduNote.css';

function EduNote({setPage, user, point}){
    return(
        <>
            <section className='eduNoteSec'>
                <EduHeader setPage={setPage} user={user} point={point} />
                <h2>오답노트</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <Link to={`/education/note/${eduContents[0].unitId}`}>
                            <img src={firstUnit} alt="first-unit" className='eduUnit' />
                        </Link>
                        <p>틀린 문제: 0개</p>
                        <h3>{eduContents[0].title}</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/education/note/${eduContents[1].unitId}`}>
                            <img src={secondUnit} alt="second-unit" className='eduUnit' />
                        </Link>
                        <p>틀린 문제: 1개</p>
                        <h3>{eduContents[1].title}</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/education/note/${eduContents[2].unitId}`}>
                            <img src={thirdUnit} alt="third-unit" className='eduUnit' />
                        </Link>
                        <p>틀린 문제: 2개</p>
                        <h3>{eduContents[2].title}</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/education/note/${eduContents[3].unitId}`}>
                            <img src={fourthUnit} alt="fourth-unit" className='eduUnit' />
                        </Link>
                        <p>틀린 문제: 3개</p>
                        <h3>{eduContents[3].title}</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/education/note/${eduContents[4].unitId}`}>
                            <img src={fifthUnit} alt="fifth-unit" className='eduUnit' />
                        </Link>
                        <p>틀린 문제: 1개</p>
                        <h3>{eduContents[4].title}</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/education/note/${eduContents[5].unitId}`}>
                                <img src={sixthUnit} alt="sixth-unit" className='eduUnit' />
                        </Link>
                        <p>틀린 문제: 5개</p>
                        <h3>{eduContents[5].title}</h3>
                    </SwiperSlide>
                </Swiper>
                <EduFooter />
            </section>
        </>
    )

}

export default EduNote;