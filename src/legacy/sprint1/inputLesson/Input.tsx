import React, {ChangeEvent, useState} from 'react';
// import {FullInput} from "./FullInput";
import {OnlyInput} from "./OnlyInput";
import {OnlyButton} from "./OnlyButton";

type InputType = {
    addMessageToState?: (title: string) => void
}

export const Input = (props: InputType) => {

    let [messages, setMessages] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState('')

    function addMessageToState(title: string) {
        let newMessage = {message: title};
        setMessages([newMessage, ...messages])
    }

    const callBackButtonHandler = () => {
        addMessageToState(title)
        setTitle('')
    }

    return (
        <div>
            {/*<FullInput addMessageToState={addMessageToState}/>*/}
            <OnlyInput setTitle={setTitle} title={title}/>
            <OnlyButton name={"add"} callBack={callBackButtonHandler}/>
            {messages.map((m, index) => {
                return (
                    <div key={index}>{m.message}</div>
                )
            })}
        </div>
    );
};