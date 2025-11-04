import { useEffect, useState } from "react";

export default function Example2_inputEffect() {
  const [input, setInput] = useState("");
  const inputValue = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    console.log(`인풋값${input} 변화 감지!`);
  }, [input]);

  return (
    <section className="mb-30">
      <header className="mb-10">
        <p className="text-2xl font-medium">
          Example2. 입력값 변화 감지해서 콘솔에 출력하기
        </p>
      </header>
      <input
        type="text"
        className="border max-w-lg text-black-900"
        onChange={inputValue}
      />
      <p>{input}</p>
    </section>
  );
}
