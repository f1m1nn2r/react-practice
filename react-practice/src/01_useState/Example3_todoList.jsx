import { useRef, useState } from "react";
import TodoInput from "./todo/TodoInput";
import TodoItem from "./todo/TodoItem";

export default function Example3_todoList() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  let next = useRef(0);

  const todoInputValue = (e) => {
    setTodoInput(e.target.value);
  };
  const todoAdd = () => {
    setTodos([...todos, { id: next.current++, name: todoInput }]);
    setTodoInput("");
  };

  // filter(): 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링
  // 배열에서 클릭한 id 값과 todo.id 값이 같지 않은 항목만 남긴다
  const todoRemove = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <section className="border p-10">
      <header className="mb-10">
        <p className="text-2xl font-medium mb-5">Example3. ToDo 리스트</p>
        <span className="text-base">할 일을 입력하고 추가해보세요</span>
      </header>

      <TodoInput
        todoInput={todoInput}
        todoInputValue={todoInputValue}
        todoAdd={todoAdd}
      />
      <TodoItem todos={todos} todoRemove={todoRemove} />
    </section>
  );
}
