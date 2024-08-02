import { Link } from 'react-router-dom';

const EduQBtn = ()=>{
    return(
        <>
        <div className='flex eduQBtn'>
            <div className="basicQ active">기초문제</div>
            <Link to={'/education/today/5/11'}>
                <div className="deepQ">응용문제</div>
            </Link>
        </div>
        </>
    )
}

export default EduQBtn