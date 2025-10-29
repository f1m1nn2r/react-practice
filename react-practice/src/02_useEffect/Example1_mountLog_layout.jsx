import { useState } from "react";
import Example1_mountLog from "./Example1_mountLog";

export default function Example1_mountLog_layout() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      <button
        className="block bg-blue-300 cursor-pointer p-2 mb-5"
        onClick={() => setShowTimer((prev) => !prev)}
      >
        타이머 숨기기
      </button>
      {showTimer ? <Example1_mountLog /> : <p>콘솔을 확인하세요</p>}
    </>
  );
}
