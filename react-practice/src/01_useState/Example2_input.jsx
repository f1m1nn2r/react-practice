import { useState } from "react";

export default function Example2_input() {
  const [input, setInput] = useState("");
  const inputValue = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <p className="text-2xl font-medium mb-5">Example2. 인풋값 실시간 반영</p>

      <div className="max-h-100 overflow-y-auto">
        <textarea
          name="text-input"
          id="text-input"
          className="border w-100 h-50"
          onChange={(e) => inputValue(e)}
        ></textarea>
        <p>{input}</p>
      </div>
    </>
  );
}
