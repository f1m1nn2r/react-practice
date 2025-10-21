export default function TodoInput({ todoInput, todoInputValue, todoAdd }) {
  return (
    <>
      <div className="flex gap-5 mb-10">
        <input
          type="text"
          className="border max-w-lg text-black-900"
          value={todoInput}
          onChange={(e) => todoInputValue(e)}
        />
        <button
          className="w-10 h-10 bg-blue-300 flex items-center justify-center cursor-pointer"
          onClick={() => todoAdd()}
        >
          <span className="w-5 h-1 bg-black absolute"></span>
          <span className="w-1 h-5 bg-black absolute"></span>
        </button>
      </div>
    </>
  );
}
