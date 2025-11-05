import { useState } from "react";
import GreetingButton from "./PropsPassing/GreetingButton";

export default function Example1_PropsPassing() {
  const [name] = useState("홍길동");

  const hi = () => {
    console.log(`${name}이에용 (props로 전달)`);
  };

  return (
    <section className="mb-30">
      <header className="mb-10">
        <p className="text-2xl font-medium">
          Example5. Props 전달 (데이터 & 함수)
        </p>
      </header>
      <GreetingButton name={name} hi={hi} />
    </section>
  );
}
