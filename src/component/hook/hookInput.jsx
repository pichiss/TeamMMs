import { useState, useCallback } from "react"


export default function HookInput(inputData) {

    const [data, setData] = useState(inputData)
    
    const onchange = useCallback((e) => {
        const {name, value} = e.target;
        setData((data)=>({
            ...data, 
            [name] : value})) //[키] : 값
    },[])

    const reset = useCallback(()=>setData(inputData),[inputData])

    return[data,onchange,reset]
}
