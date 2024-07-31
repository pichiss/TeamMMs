import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import home11 from '../../../../img/eduPop/home1-1.png'
import home12 from '../../../../img/eduPop/home1-2.png'
import home21 from '../../../../img/eduPop/home2-1.png'
import home22 from '../../../../img/eduPop/home2-2.png'
import home31 from '../../../../img/eduPop/home3-1.png'
import home32 from '../../../../img/eduPop/home3-2.png'
import home41 from '../../../../img/eduPop/home4-1.png'
import home42 from '../../../../img/eduPop/home4-2.png'

function HelpSec1(){
    const swiperImg = [home11, home12, home21, home22,home31, home32, home41, home42]
    return(
        <Swiper
            pagination={{
            type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {swiperImg.map((img)=>
                <SwiperSlide>
                    <img src={img} alt='img'/>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default HelpSec1;