import { useState } from "react";

export default function Page3({changeOuterState, originalOuterState}){
    const [counter, setCounter] = useState(originalOuterState);
    function changeLocalState(){
        setCounter((prev) => prev + 1);
    }
    return (<div>
        <h1>this is page 3 </h1>
        <h2>counter : {counter}</h2>
        <button onClick={changeLocalState}>click me to change local value</button>
        <button onClick={() => changeOuterState(prev => prev + 1)}>click me to change outer value</button>
    </div>);
}