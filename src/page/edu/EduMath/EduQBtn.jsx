import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EduQBtn = ()=>{

    const [btnBasic, setBtnBasic] = useState(true);
    const [btnDeep, setBtnDeep] = useState(false);

    function onClickBasic(){
        setBtnBasic(true)
        setBtnDeep(false)
    }

    function onClickDeep(){
        setBtnBasic(false)
        setBtnDeep(true)
    }

    return(
        <>
        <div className='flex eduQBtn'>
            <Link to={'/education/today/5/1'}>
                <div className={"basicQ " + (btnBasic ? "active" : "")} onClick={onClickBasic}>기초문제</div>
            </Link>
            <Link to={'/education/today/5/11'}>
                <div className={"deepQ " + (btnDeep ? "active" : "")} onClick={onClickDeep}>응용문제</div>
            </Link>
        </div>
        </>
    )
}

export default EduQBtn