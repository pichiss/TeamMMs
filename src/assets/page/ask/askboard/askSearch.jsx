import {useState, useContext} from 'react';
import { editContext } from '../App';
import findIcon from '../assets/icons8-find-50.png'

const Dicsearch =()=>{
    const {searchWord} = useContext(editContext);
    const [searchDic, setSearchDic] = useState('');
    function searchChange(e){
        setSearchDic(e.target.value)
    }
    function searchBtn(){
        searchWord(searchDic)
    }
    return(
        <div className='flex searchWrap'>
        <input type="text" value={searchDic} onChange={searchChange}></input>
        <div className='findIcon' onClick={searchBtn}><img src={findIcon} alt="find icon" /></div>
        </div>
    )
}
export default Dicsearch;