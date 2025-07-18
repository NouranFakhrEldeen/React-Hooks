import { useEffect, useState } from "react";

export const EffectExample = () => {
  const [data, setData] = useState([]);
  const [showHamada, setShowHamada] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    console.log("Hamada");
  }, [showHamada]);
 
  return (
    <div>
      <button onClick={() => setShowHamada((prev) => !prev)}> Toggle </button>
      <h1> Posts</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title} </li>
        ))}
      </ul>
    </div>
  );
};
