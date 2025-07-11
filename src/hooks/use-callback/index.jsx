
import { useCallback, useState } from "react";
import Child from "./child";

export const CallBackExample=() => {
  const [toggle, setToggle] = useState(false);
  const [data] = useState("HI , my name is ");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );
  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}