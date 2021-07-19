import { useState } from "react";

const Field = ({ add }) => {
  const [value, setValue] = useState("");

    const addTodo = (event) => {
    event.preventDefault();
    //CREATE NEW TODO STRUCTURE
    const payload = {
      id:Math.floor(Math.random () * 1000),
      title: value,
      completed: false,
    };
    add(payload);
    // RESET INPUT VALUE
    setValue("");
  };
  
  return (
    <div>
      <h1 className="title">Maria's Todo List</h1>
      <form className="field-wrapper" onSubmit={addTodo}>
        <input
          type="text"
          // READS VALUE FROM STATE
          value={value}
          // ADDS VALUE TO STATE
          onChange={(e) => setValue(e.target.value)}
          className="input-text"
          placeholder="New List"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Field;
