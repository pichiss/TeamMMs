import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function HelpSec1({swiperImg1, swiperImg2}){
    

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
      
    const resizeListener = () => {
        setInnerWidth(window.innerWidth);
    };
      
    useEffect(() => {
        window.addEventListener("resize", resizeListener);
    
        return () => {
        window.removeEventListener("resize", resizeListener);
        };
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정
    
        
    return(
        <>
        <Swiper
            pagination={{
            type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            
        {innerWidth <= 750 ?
            <>
            {swiperImg2.map((img)=>
                <SwiperSlide>
                    <img src={img} alt='img'/>
                </SwiperSlide>
            )}
            </>
            :
            <>
            {swiperImg1.map((img)=>
                <SwiperSlide>
                    <img src={img} alt='img'/>
                </SwiperSlide>
            )}
            </>
        }
        </Swiper>
        </>
    )
}

export default HelpSec1;