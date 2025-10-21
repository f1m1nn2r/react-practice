export default function TodoItem({ todos, todoRemove }) {
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li className="flex items-center gap-10 mb-3" key={todo.id}>
              <div className="flex items-center gap-3">
                <input type="checkbox" id={todo.id} />
                <label htmlFor={todo.id}>
                  <p className="max-w-30 w-30 truncate">{todo.name}</p>
                </label>
              </div>
              <button
                className="block cursor-pointer"
                onClick={() => todoRemove(todo.id)}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
