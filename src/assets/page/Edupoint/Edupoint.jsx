import './edupoint.css';
import EduHeader from '../edu/EduHeader';
import EduFooter from '../edu/EduFooter';
import eduPointData from './eduPointData';
import CommonPagination from '../../common/Pagination';

import star from '../../img/icon/star.png';
import { useState } from 'react';

export default function EduPoint({ setPage, user,point, updateUserPoints }) {

    function buyItem(pointCost) {
        if (point >= pointCost) {
            if (window.confirm(`구매 하시겠습니까?`)) {
                updateUserPoints(point - pointCost);
            }
        } else {
            alert('포인트가 부족합니다.');
        }
    }

        // 페이지네이션
        const [pages, setPages] = useState(1);
        const postPerPage = 5
        const indexOfLastPost = pages * postPerPage
        const indexOfFirstPost = indexOfLastPost - postPerPage
        const currentPost = eduPointData.slice(indexOfFirstPost, indexOfLastPost)
    
    

    return (
         <section className='eduPointsWrap'>
            <EduHeader setPage={setPage} user={user} point={point}/>
            <div className='eduPoints'>
                <h2>포인트샵</h2>
                <ul className='flex eduPointsBox'>
                    {eduPointData.map((item) => (
                        <li className='eduPointItems' key={item.key} onClick={() => buyItem(item.point)}>
                            <div className='pointStar flex'>
                                <img src={star} alt="point icon" />
                                {item.point}
                            </div>
                            <div className='pointItem'>
                                <img src={item.src} alt={item.item} />
                            </div>
                            <pre>{item.item}</pre>
                        </li>
                    ))}
                </ul>
            </div>
            <CommonPagination pages={pages} setPages={setPages} postPerPage={postPerPage} datas={eduPointData}/>
            <div>
                <EduFooter />
            </div>
        </section>
    );
}