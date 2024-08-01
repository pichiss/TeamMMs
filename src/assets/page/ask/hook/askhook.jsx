import { useCallback, useState } from "react";


const ItemInput = (inputData)=>{
    const [data, setData] = useState(inputData)
    const onchange = useCallback((e)=>{
        const {name, value} = e.target;
        setData((data)=>({...data, [name] : value}))
        // 중괄호랑 리턴 뺐음.
    })
    const reset = useCallback(()=>setData(inputData),[inputData])
    return[data,onchange,reset]
}

export default ItemInput;