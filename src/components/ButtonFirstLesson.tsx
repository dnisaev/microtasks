import React from 'react';

export const ButtonFirstLesson = () => {
    // const myFirstSubscriber = () => {
    //     console.log("button is pressed on first")
    // }
    //
    // const mySecondSubscriber = () => {
    //     console.log("button is pressed on second")
    // }
    //
    // const fooFirst = () => {
    //     console.log("first 100200")
    // }
    //
    // const fooSecond = (var100200: string) => {
    //     console.log(var100200)
    // }

    const onclickHandler = (name: string) => {
        console.log(`button is pressed on ${name}`)
    }

    return (
        <div>
            {/*/!*<button onClick={(event)=>{console.log("button is pressed on first")}}>MyYouTubeChannel-1</button>*!/*/}
            <button onClick={(event)=>onclickHandler("first")}>MyYouTubeChannel-1</button>
            <button onClick={(event)=>onclickHandler("second")}>MyYouTubeChannel-2</button>
            {/*<button onClick={fooFirst}>First</button>*/}
            {/*<button onClick={()=>fooSecond("second 100200")}>Second</button>*/}
        </div>
    );
};