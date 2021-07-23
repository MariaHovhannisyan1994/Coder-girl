import "./App.css";
import React, { useState } from "react";
import List from "./components/List";
import Field from "./components/Field";
import Filters from "./components/Filters";


export const FILTERS = {
  completed:"completed",
  notCompleted:"not completed",
  all :"all"
  
}
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter]=useState("");

  // ADDS NEW TODO TO TODOS ARRAY/STATE

  const add = (todo) => setTodos([...todos, todo]);

  const remove = (id) => {
    // CREATES NEW ARRAY BY FILTERING REMOVED VALUE
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const update = (newTodo) => {
    const newTodoList = todos.map((todo) => {
      //FINDS TODO WITH NEWTODO ID
      if (todo.id === newTodo.id) {
        //MERGES TODO DATA WITH NEW ONE
        return { ...todo, ...newTodo };
      } else {
        //OR RETURNS WITHOUT CHANGES
        return todo;
      }
    });
    setTodos(newTodoList);
  };

  const getFilteredTodos=()=>{
    if(filter===FILTERS.completed){
      return todos.filter(todo=>todo.completed)
    }
    if(filter===FILTERS.notCompleted){
      return todos.filter(todo=>!todo.completed)
    }

    return todos;
  }

  const filteredTodos=getFilteredTodos();
  return (
    <div className="App">
      <Field add={add} />
      <Filters  setFilter={setFilter}/>
      <List data={filteredTodos} update={update} remove={remove}/>  
    </div>
  );
}

export default App;
