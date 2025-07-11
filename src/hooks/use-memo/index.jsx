import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export const MemoExample=() =>{
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);


  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    console.time("timer")
    for (const comment of comments) {
      let currentName = comment.name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.timeEnd("timer")
    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  //  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div className="App">
      <div> {findLongestName(data)} </div>

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