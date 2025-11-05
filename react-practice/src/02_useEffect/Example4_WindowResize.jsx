import { useEffect, useState } from "react";

export default function Example4_WindowResize() {
  const [resizing, setResizing] = useState(window.innerWidth);

  const handleResize = () => {
    setResizing(window.innerWidth);
    // console.log(resizing);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="mb-30">
      <header className="mb-10">
        <p className="text-2xl font-medium">Example4. 창 크기 감지 이벤트</p>
      </header>
      <div>window.innerWidth: {resizing}</div>
    </section>
  );
}
