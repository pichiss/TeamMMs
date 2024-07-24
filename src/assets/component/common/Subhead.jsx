import subHeaderImg from '../../img/subheader.svg';
import './Subhead.css';

function SubHead(props){
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