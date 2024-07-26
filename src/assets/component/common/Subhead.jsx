import subHeaderImg from '../../img/subheader.svg';
import './Subhead.css';
import monster1 from '../../img/monster/monster5_2.png';
import monster2 from '../../img/monster/monster2.png';
import { useState } from 'react';

function SubHead(props){
    const [monster, setMonster] = useState(false);

    return(
        <>
        <div className='subHeadWrap'>
            <img src={subHeaderImg} alt="sub-header-image" className='subHeadBg' />
            <img src={props.chara} alt="sub-header-character" className='subHeadChara' />
        </div>
        </>
    )
}

export default SubHead;