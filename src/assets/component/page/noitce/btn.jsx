import './btnStyle.css'
import { Link } from 'react-router-dom';

export default function Btn({ tit, link, Bclass }) {

    return (
        <div className={`flex ${Bclass}`}>
             <Link to={link}>
             <div className={`boardBtn`} onClick={func}>{tit}</div>
             </Link>
        </div>
    );
}
