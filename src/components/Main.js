import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import {initialTodos} from '../utils/todos-init';

function Main() {
  const [todos, setTodos] = useState([]);

  const handleCopyTodo = (todo) => {
    console.log('Copy ' + todo);
  };

  const handleEditTodo = (todo) => {
    console.log('Edit ' + todo);
  };

  const handleDeteleTodo = (todo) => {
    console.log('Delete ' + todo);
  };

  useEffect(() => {
    console.log('Reading initial data...');
    setTodos(initialTodos);
  }, []);

  return(
    <section className="todos">
      <form name="todo-form" className="todos__form">
        <input type="text" name="todo" className="todos__input" 
          placeholder="Next task..." />
        <button className="button todos__btn-submit">
          Add
        </button>
      </form>
      <ul className="todos__list">
        {todos.map((todo, ind) => (
          <Todo todo={todo} key={ind}
            onCopy={ (todo) => {handleCopyTodo(todo);} } 
            onEdit={ (todo) => {handleEditTodo(todo);} } 
            onDelete={ (todo) => {handleDeteleTodo(todo);} } 
          />
        ))}
      </ul>
    </section>
  );
}

export default Main;