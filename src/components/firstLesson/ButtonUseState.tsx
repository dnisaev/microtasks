import React, {useState} from 'react';

export const ButtonUseState = () => {

    const onclickHandler = () => {
        setNum(++num)
        console.log(num)
    }

    let [num, setNum] = useState(1)

    const onclickResetValue = () => {
        setNum(num = 1)
    }

    return (
        <>
            <div>{num}</div>
            <button onClick={onclickHandler}>press me</button>
            <button onClick={onclickResetValue}>reset velue</button>
        </>
    )
}