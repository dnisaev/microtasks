import React, {ChangeEvent, useState} from 'react';


type FullInputType = {
    addMessageToState: (title: string)=> void
}

export const FullInput = (props: FullInputType) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessageToState(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler} >+</button>
        </div>
    );
};