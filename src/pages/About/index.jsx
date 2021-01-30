import React, { useState, useEffect, useContext } from "react";
import FriendStatus from "./FriendStatus.jsx";
import { MyContext } from "../../store/index";

export default function About() {
  const store = useContext(MyContext);
  console.log("121212===> parent", store);
  const res = FriendStatus();
  console.log("112", res);
  const [count, setCount] = useState(0);
  const [showFriend, setShowFriend] = useState(true);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    console.log("parent jieshu");
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  function handleClick() {
    setCount(count + 1);
    setShowFriend(!showFriend);
  }
  return (
    <div>
      <p>You clicked{count} times</p>
      <button onClick={handleClick}>Click me</button>
      <p>{res}</p>
      {/* {
        showFriend && <FriendStatus></FriendStatus>
      } */}
      <button
        onClick={() =>
          store.dispatch({
            type: "decrement",
          })}
      >
        decrement
      </button>
    </div>
  );
}
