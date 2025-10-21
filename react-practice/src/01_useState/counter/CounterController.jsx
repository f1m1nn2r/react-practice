export default function CounterController({ setCount }) {
  const countValues = [-1, -10, -100, +100, +10, +1];
  return (
    <div>
      <p>버튼을 눌러보세요.</p>

      <div>
        {countValues.map((value) => {
          return (
            <button
              onClick={() => {
                setCount(value);
              }}
              key={value}
              className={`m-3 py-3 px-6 cursor-pointer ${
                value > 0 ? "bg-blue-300" : "bg-red-300"
              }`}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
