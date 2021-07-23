const ListItem = ({ id, title, completed, remove, update }) => {
  return (
    <div className="todo-item">
      <span
        children={title}
        className={`todo-item-title ${completed ? "completed" : ""}`}
      />
      <label>
        <span
          children={completed ? "Completed" : "Not completed"}
          className="todo-item-state"
        />
        {/* PASSING AN ARGUMENT TO THE UPDATE FUNCTION */}
        <span>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => update({ id, title, completed: !completed })}
        />
        </span>
        
      </label>
      {/* PASSING AN ID TO THE REMOVE FUNCTION */}
      <button  children="Remove" onClick={() => remove(id)}  className="remove-btn"/>
    </div>
  );
};

export default ListItem;
