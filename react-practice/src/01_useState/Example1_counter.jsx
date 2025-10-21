import { useState } from "react";
import CounterController from "./CounterController";
import CounterView from "./CounterView";

export default function Example1_counter() {
  const [count, setCount] = useState(0);
  const clickCount = (value) => {
    setCount((prev) => prev + value);

    {
      /* 
    기존: setCount(count + value);
    수정: setCount((prev) => prev + value);
    -> 기존: 빠르게 여러 번 클릭하거나, 비동기 업데이트가 섞이면 오래된 값이 나올 수 있음(중복 렌더링 발생)
    -> 수정: 리액트가 보장하는 최신 상태의 값이 들어오기 때문에 여러 번 업데이트 되어도 최신 상태 기준
            안전하게 계산됨
            */
    }
  };

  return (
    <>
      <p className="text-2xl font-medium">카운터 만들기</p>

      <CounterView count={count} />
      <CounterController setCount={clickCount} />
    </>
  );
}
