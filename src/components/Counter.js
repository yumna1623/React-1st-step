import { useRef } from "react";
import { useState } from "react";

function Counter() {
    const [number,setNumber] = useState(0);
    let num = useRef(0); //this 0 value will store in num current value so we'll get it like num.current
    function handleClick(e) {
        e.stopPropagation();
            setNumber(number=>number+1); 
            setNumber(number=>number+1); 
            setNumber(number=>number+1); 
            num.current++;           
             
            console.log("number",number);
            console.log("num",num.current);
    }
    return(
        <>
        <h1 style={{color : 'white'}}>{number}</h1>
        <button onClick={handleClick}>Add</button>
        </>
    )
}
export default Counter;
// ------------------------------------------------------------------------------------------------------------------------------------------------
// import { useState } from "react";

// function Counter() {
//     const [number,setNumber] = useState(0);
//     let num = 0;
//     function handleClick(e) {
//         e.stopPropagation();
//             setNumber(number=>number+1); 
//             setNumber(number=>number+1); 
//             setNumber(number=>number+1); 
//             num++;           

//             //"{now in this way num will not change as value of num  
//             // will become 0 cause of re rnedering of the component every time the component re renders 
//             // the value of num will become 0 so we use useRef to store the value of num"}

//             console.log("number",number);
//             console.log("num",num);
//     }
//     return(
//         <>
//         <h1 style={{color : 'white'}}>{number}</h1>
//         <button onClick={handleClick}>Add</button>
//         </>
//     )
// }
// export default Counter;