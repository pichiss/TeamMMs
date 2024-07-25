const sortList = [
    {value : 'All', name : '전체'},
    {value : '일반문의', name : '일반문의'},
    {value : '오답신고', name : '오답신고'},
    {value : '학습질문', name : '학습질문'},
]


const SortSelect = ({value, onChange})=>{
    function optChange(e){
        onChange(e.target.value)
    }
    return(
        <select key={value} value={value} onChange={optChange}>
            {sortList.map((sort)=>
                <option key={sort.value} value={sort.value}>{sort.name}</option>
            )}
        </select>
    )
}

export default SortSelect;