import Example1_counter from "./01_useState/Example1_counter";
import Example2_input from "./01_useState/Example2_input";
import Example3_todoList from "./01_useState/Example3_todoList";
import Example4_heart from "./01_useState/Example4_heart";
import Example5_themeToggle from "./01_useState/Example5_themeToggle";
import Example1_mountLog_layout from "./02_useEffect/Example1_mountLog_layout";

function App() {
  return (
    <section className="app p-20 m-auto max-w-4xl">
      {/* useState */}
      <div className="useState">
        <header className="mb-10">
          <p className="text-4xl font-bold">1. useState</p>
        </header>
        <Example1_counter />
        <Example2_input />
        <Example3_todoList />
        <Example4_heart />
        <Example5_themeToggle />
      </div>
      <div className="useEffect">
        <header className="mb-10">
          <p className="text-4xl font-bold">2. useEffect</p>
        </header>
        <Example1_mountLog_layout />
      </div>
    </section>
  );
}

export default App;
