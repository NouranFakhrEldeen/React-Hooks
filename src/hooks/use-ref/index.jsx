import { useEffect, useRef, useState } from "react";

export const RefExample = () => {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <>
      <p> Count: {count}</p>
      <p> Previous Count: {previousCount.current} </p>
      
      <button onClick={() => setCount((prev) => prev + 1)}> Increment</button>
    </>
  );
};



// import { useEffect, useRef } from "react";

// export const RefExample = () => {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus(); // Focus the input element on mount
//   }, []);

//   return (
//     <>
//   <input ref={inputRef} type="text"></input>
//     </>
//   );
// };



// import { useEffect, useRef, useState } from "react";

// export const RefExample = () => {
//   const [timer, setTimer] = useState(0);

//   const intervalRef = useRef(null);
//   useEffect(() => {
//     // const interval = setInterval(() => {
//       intervalRef.current = setInterval(() => {
//       setTimer(timer + 1);
//     }, 1000);

//     return () => clearInterval(intervalRef.current); // Cleanup on unmount
//   }, [timer]);

//   return (
//     <>
//       <h1> Timer -{timer}</h1>
  
//       {/* // interval is not defined , as it is in useEffectscope so we need to use a ref
//      <button onClick={() => clearInterval(interval)}> clear timer</button> */}
//       <button onClick={() => clearInterval(intervalRef.current)}> clear timer</button> 
//       </>
//   );
// };
