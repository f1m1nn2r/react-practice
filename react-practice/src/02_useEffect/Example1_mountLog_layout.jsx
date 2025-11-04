import { useState } from "react";
import Example1_mountLog from "./mountLog/Example1_mountLog";

export default function Example1_mountLog_layout() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <section className="mb-30">
      <header className="mb-10">
        <p className="text-2xl font-medium">
          Example1. 컴포넌트 마운트 시 콘솔 출력 및<br />
          타이머 만들기(setInterval 함수로 구현/cleanup 함수로 타이머 정리)
        </p>
      </header>
      <button
        className="block bg-blue-300 cursor-pointer p-2 mb-5"
        onClick={() => setShowTimer((prev) => !prev)}
      >
        타이머 숨기기
      </button>
      {showTimer ? <Example1_mountLog /> : <p>콘솔을 확인하세요</p>}
    </section>
  );
}
