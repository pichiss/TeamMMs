import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { eduContents } from './eduData.jsx';
import EduHeader from './EduHeader.jsx';
import EduFooter from './EduFooter.jsx';

import logo from '../../img/logo.png';
import firstUnit from '../../img/monster/monster5_Ellipse.png';
import secondUnit from '../../img/monster/monster2_Ellipse.png';
import thirdUnit from '../../img/monster/monster3_Ellipse.png';
import fourthUnit from '../../img/monster/bibi_Ellipse.png';
import fifthUnit from '../../img/monster/bossMonster_Ellipse.png';
import sixthUnit from '../../img/monster/kindBoss_Ellipse.png';
import nomalStar from '../../img/icon/eduStar_1.svg';
import perfectStar from '../../img/icon/eduStar_2.svg';

import 'swiper/css';
import './EduToday.css';

function EduToday({setPage, user, point}){

    return(
        <>
            <section className='eduTodaySec'>
                <EduHeader setPage={setPage} user={user} point={point} />
                <img src={logo} alt="catch-monsters-logo" />
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <Link to={`/education/today/${eduContents[0].unitId}`}>
                            <img src={firstUnit} alt="first-unit" className='eduUnit' />
                        </Link>
                        <div className='eduStarWrap'>
                            <img src={nomalStar} alt="score-nomal-star-image" className='firstStar' />
                            <img src={nomalStar} alt="score-nomal-star-image" className='secondStar' />
                            <img src={nomalStar} alt="score-nomal-star-image" className='thirdStar' />
                        </div>
                        <h3>{eduContents[0].title}</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/education/today/${eduContents[1].unitId}`}>
                            <img src={secondUnit} alt="second-unit" className='eduUnit' />
                        </Link>
                        <div className='eduStarWrap'>
                            <img src={nomalStar} alt="score-nomal-star-image" className='firstStar' />
                            <img src={nomalStar} alt="score-nomal-star-image" className='secondStar' />
                            <img src={nomalStar} alt="score-nomal-star-image" className='thirdStar' />
                        </div>
                        <h3>{eduContents[1].title}</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/education/today/${eduContents[2].unitId}`}>
                            <img src={thirdUnit} alt="third-unit" className='eduUnit' />
                        </Link>
                        <div className='eduStarWrap'>
                            <img src={nomalStar} alt="score-nomal-star-image" className='firstStar' />
                            <img src={nomalStar} alt="score-nomal-star-image" className='secondStar' />
                            <img src={nomalStar} alt="score-nomal-star-image" className='thirdStar' />
                        </div>
                        <h3>{eduContents[2].title}</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/education/today/${eduContents[3].unitId}`}>
                            <img src={fourthUnit} alt="fourth-unit" className='eduUnit' />
                        </Link>
                        <div className='eduStarWrap'>
                            <img src={nomalStar} alt="score-nomal-star-image" className='firstStar' />
                            <img src={nomalStar} alt="score-nomal-star-image" className='secondStar' />
                            <img src={nomalStar} alt="score-nomal-star-image" className='thirdStar' />
                        </div>
                        <h3>{eduContents[3].title}</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/education/today/${eduContents[4].unitId}`}>
                            <img src={fifthUnit} alt="fifth-unit" className='eduUnit' />
                        </Link>
                        <div className='eduStarWrap'>
                            <img src={nomalStar} alt="score-nomal-star-image" className='firstStar' />
                            <img src={nomalStar} alt="score-nomal-star-image" className='secondStar' />
                            <img src={nomalStar} alt="score-nomal-star-image" className='thirdStar' />
                        </div>
                        <h3>{eduContents[4].title}</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/education/today/${eduContents[5].unitId}`}>
                                <img src={sixthUnit} alt="sixth-unit" className='eduUnit' />
                        </Link>
                        <div className='eduStarWrap'>
                            <img src={nomalStar} alt="score-nomal-star-image" className='firstStar' />
                            <img src={nomalStar} alt="score-nomal-star-image" className='secondStar' />
                            <img src={nomalStar} alt="score-nomal-star-image" className='thirdStar' />
                        </div>
                        <h3>{eduContents[5].title}</h3>
                    </SwiperSlide>
                </Swiper>
                <EduFooter />
            </section>
        </>
    )
}

export default EduToday;