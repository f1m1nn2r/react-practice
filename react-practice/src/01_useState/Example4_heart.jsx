import { useState } from "react";

export default function Example4_heart() {
  const [heart, setHeart] = useState(false);

  const heartToggle = () => {
    setHeart((prevHeart) => !prevHeart);
  };

  return (
    <section className="">
      <header className="mb-10">
        <p className="text-2xl font-medium mb-5">Example4. 좋아요 버튼 토글</p>
      </header>

      <button
        className="cursor-pointer text-5xl"
        onClick={(e) => heartToggle(e)}
      >
        {heart === false ? "🤍" : "❤️"}
      </button>
    </section>
  );
}
