import React from 'react';
import ToDo from './ToDo';

function ToDoList({ todos, toggleComplete, removeTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <ToDo 
          key={index} 
          index={index} 
          todo={todo} 
          toggleComplete={toggleComplete} 
          removeTodo={removeTodo} 
        />
      ))}
    </div>
  );
}

export default ToDoList;
