import { useEffect, useState } from 'react';
import subHeaderImg from '../../assets/img/subheader.svg'
import subHeaderImgM from '../../assets/img/subheader_mobile.svg';
import './Subhead.css';
import monster1 from '../../assets/img/monster/monster5_2.png';
import monster2 from '../../assets/img/monster/monster2.png';
function SubHead(props){

    const [width, setWidth] = useState(window.innerWidth);

    function handleResize(){
        setWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    return(
        <>
        <div className='subHeadWrap'>
            {width <= 768 ? 
            <img src={subHeaderImgM} alt='sub-header-image' className='subHeadBg' />
            :
            <img src={subHeaderImg} alt="sub-header-image" className='subHeadBg' />}
            <img src={props.chara === 1? monster1: monster2} alt="sub-header-character" className='subHeadChara' />
        </div>
        </>
    )
}

export default SubHead;