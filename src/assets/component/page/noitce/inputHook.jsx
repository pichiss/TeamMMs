import { useCallback, useState } from 'react';

export default function NoticeInput(inputData) {

    const [data, setData] = useState(inputData);

    const onChangeNoti = useCallback((e)=>{
        const {name, value} = e.target;
        setData((data)=>({
            ...data,
            [name] : value
        }))
    },[])

    const reset = useCallback(()=> setData(inputData),[inputData])

    return[data, onChangeNoti, reset]
}
