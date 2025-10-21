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
              style={{ background: value > 0 ? "green" : "red" }}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
