import { useState, useEffect } from "react";

export default function FriendStatus(props) {
  console.log("props", props);
  const [isOnline, setIsOnline] = useState(null);
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    console.log("children");
    // setTimeout(() => {
    //   handleStatusChange({
    //     isOnline: true
    //   })
    // }, 5000);
    return () => {
      console.log("移除dom");
      handleStatusChange({
        isOnline: false,
      });
    };
  });
  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}
