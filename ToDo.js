import React from 'react';

function ToDo({ todo, index, toggleComplete, removeTodo }) {
  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => toggleComplete(index)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => removeTodo(index)}>x</button>
    </div>
  );
}

export default ToDo;
