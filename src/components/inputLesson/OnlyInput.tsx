import React, {ChangeEvent} from 'react';


type OnlyInputPropsType = {
    setTitle: (title: string)=> void
    title: string
}

export const OnlyInput = (props: OnlyInputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};