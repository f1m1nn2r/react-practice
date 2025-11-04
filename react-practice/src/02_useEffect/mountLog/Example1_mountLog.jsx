import { useEffect, useState } from "react";

export default function Example1_mountLog() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("마운트 상태");

    const intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("언마운트 상태");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div>
        <p>마운트 상태</p>
        <p>타이머 실행중: {timer}초</p>
      </div>
    </>
  );
}
