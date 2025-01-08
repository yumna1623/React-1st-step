import { useMemo, useRef } from "react";
import { useState,useCallback } from "react";



function Counter() {
    console.log("Counter rendered");
    
    const [number,setNumber] = useState(3);
    let num = useRef(0); //this 0 value will store in num current value so we'll get it like num.current
    //useRef is a React hook that creates a mutable object whose .current property can hold a value.
      function handleClick(e) {
        e.stopPropagation();
            setNumber(number=>number+1); 
            setNumber(number=>number+1); 
            setNumber(number=>number+1); 
            num.current++;           
             
            console.log("number",number);
            console.log("num",num.current);
    }

    const fibFx = useCallback (function fib(n) { //1,1,2,3,5
        if(n===1 || n===2) {
            return 1;
        }
        return fib(n-1) + fib(n-2);
    },[])
    //useCallback(()=>(),[]) //useCallback is used to memoize the function 

    // useMemo(()=>(),[])
    const fibMemoized  = useMemo( () =>fibFx(number),[number,fibFx]  );//what memoized here is the return value of tis function
    //what we need to memoized is function itself and the dependency array so we use callback before the function
    //here when dependency array changes then only fibFx function will run otherwise it will not run
    //it will store the value of fibFx(number) in fibFxMemoized and it will not run again and again when number changes
    //it will run only when number changes above from useState

    return(
        <>
        <h1 style={{color : 'white'}}>{number} | {fibMemoized}</h1>
        <button onClick={handleClick}>Add</button>
        </>
    )
}
export default Counter;
// ------------------------------------------------------------------------------------------------------------------------------------------------
