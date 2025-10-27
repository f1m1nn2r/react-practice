import { useState } from "react";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export default function Example5_themeToggle() {
  const [dark, setDark] = useState(false);
  const themeSwitch = () => {
    setDark((dark) => !dark);
    console.log(dark);
  };

  return (
    <>
      <header className="mb-10">
        <p className="text-2xl font-medium mb-5">Example5. 다크모드 전환</p>
      </header>
      <section
        className={`mb-30 p-10 border ${
          dark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <button className="cursor-pointer" onClick={(e) => themeSwitch(e)}>
          {dark ? <MdDarkMode size={40} /> : <CiDark size={40} />}
        </button>
        <div className="">
          <div>
            <p className="text-2xl mb-5">이름: 홍길동</p>
            <ul>
              <li>나이: 27</li>
              <li>취미: 독서</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
