import subHeaderImg from '../../img/subheader.svg';
import './Subhead.css';
import monster1 from '../../img/monster/monster5_2.png';
import monster2 from '../../img/monster/monster2.png';
function SubHead(props){

    return(
        <>
        <div className='subHeadWrap'>
            <img src={subHeaderImg} alt="sub-header-image" className='subHeadBg' />
            <img src={props.chara === 1? monster1: monster2} alt="sub-header-character" className='subHeadChara' />
        </div>
        </>
    )
}

export default SubHead;