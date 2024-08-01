import { useCallback, useState } from "react";


const ItemInput = (inputData)=>{
    const [data, setData] = useState(inputData)
    const onchange = useCallback((e)=>{
        const {name, value} = e.target;
        setData((data)=>({...data, [name] : value}))
    })
    const reset = useCallback(()=>setData(inputData),[inputData])
    return[data,onchange,reset]
}

export default ItemInput;