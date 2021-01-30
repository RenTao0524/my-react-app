import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../../store/index";

export default function Home(props) {
  const store = useContext(MyContext);
  console.log("===>1 store", store, props);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("===>2");
  });
  return (
    <div>
      home
      <button onClick={() => setCount(count + 1)}>click</button>
      <h3>store</h3>
      <p>{store.state.count}</p>
      <button
        onClick={() =>
          store.dispatch({
            type: "increment",
          })
        }
      >
        increment
      </button>
    </div>
  );
}
