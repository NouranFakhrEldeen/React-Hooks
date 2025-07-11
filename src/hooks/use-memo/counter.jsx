import {  useState, useMemo } from "react";

export const CountertMemoExample = () => {
  const [count, setCount] = useState(0);
  console.time("expensiveComputation");
  const expensiveComputation = useMemo(() => {
    const item = []
 
    for (let i = 0; i < count + 10000000; i++) {

        item.push(i);
    }

    return item;
  },[])

  console.timeEnd("expensiveComputation"); 
  return (
    <section>
    <button onClick={() => setCount((prev) => prev + 1)}>ADD</button>
    <p>Count Value: {count}</p>
    <p>Expensive Computation Length: {expensiveComputation.length}</p>

    <ChildComponent expensiveOpr={expensiveComputation.length} />
  </section>
  );
};

const ChildComponent = ({ expensiveOpr }) => {
    console.log("Child component rendered",{expensiveOpr});
    return <div>Child Component Result: {expensiveOpr}</div>;
  };