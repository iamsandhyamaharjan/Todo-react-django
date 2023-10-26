import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Table from "./components/Table";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState("");
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/todo/");
     
      setTodos(response.data);
      setisLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-indigo-10 px-8 min-h-screen">
      <nav className="pt-8">
        <h1 className="text-5xl text-center pb-12">TO DO LIST</h1>
      </nav>
      <TodoForm
      setTodos={setTodos}
      fetchData={fetchData}
      />
      <Table 
      todos={todos}
      fetchData={fetchData}
setTodos={setTodos} 
isLoading={isLoading}     />
    </div>
  );
}

export default App;
