import './btnStyle.css'
import { Link } from 'react-router-dom';

export default function Btn({ tit, link, Bclass, func }) {



    return (
        <div className={`flex ${Bclass}`}  onClick={func}>
             <Link to={link}>
             <div className={`boardBtn`}>{tit}</div>
             </Link>
        </div>
    );
}
