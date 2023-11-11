import React from 'react';

type ButtonUniversalPropsType = {
    name: string
    callBack: ()=> void
}

// const ButtonFirst = (name: string, number: number) => {
//     console.log(`pressed ${name} ${number}`)
// }
//
// const ButtonSecond = (name: string, number: number) => {
//     console.log(`pressed ${name} ${number}`)
// }
//
// const ButtonThird = () => {
//     console.log(`just pressed`)
// }

// function App() {
//
//     return (
//         <div className="App">
//             {/*<ButtonUniversal name={"First"} callBack={()=>ButtonFirst("first", 1)}/>*/}
//             {/*<ButtonUniversal name={"Second"} callBack={()=>ButtonSecond("second", 2)}/>*/}
//             {/*<ButtonUniversal name={"Just button"} callBack={ButtonThird}/>*/}
//         </div>
//     );
// }
export const ButtonUniversal = (props: ButtonUniversalPropsType) => {
    const onclickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onclickHandler}>{props.name}</button>
        </div>
    );
};