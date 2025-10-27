import Example1_counter from "./01_useState/Example1_counter";
import Example2_input from "./01_useState/Example2_input";
import Example3_todoList from "./01_useState/Example3_todoList";
import Example4_heart from "./01_useState/Example4_heart";

function App() {
  return (
    <div className="app p-20 m-auto max-w-4xl">
      <Example1_counter />
      <Example2_input />
      <Example3_todoList />
      <Example4_heart />
    </div>
  );
}

export default App;
