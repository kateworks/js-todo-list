import React, { useState } from 'react';
import Todo from './Todo';
import {initialTodos} from '../utils/todos-init';

function Main() {
  const ADD_SUBMIT_NAME = 'Add';
  const SAVE_SUBMIT_NAME = 'Save';

  const [todos, setTodos] = useState(initialTodos);
  const [editedTodo, setEditedTodo] = useState('');
  const [editedInd, setEditedInd] = useState(-1);
  const [submitName, setSubmitName] = useState(ADD_SUBMIT_NAME);

  const handleDeteleTodo = (deletedTodoIndex) => {
    setTodos(todos.filter((item, index) => 
      (index !== deletedTodoIndex)));
  };

  const handleCopyTodo = (copiedTodo, copiedTodoIndex) => {
    const tmpArray = todos.slice();
    tmpArray.splice(copiedTodoIndex, 0, copiedTodo);
    setTodos(tmpArray);
  };

  const handleEditTodo = (editedTodo, editedTodoIndex) => {
    setEditedTodo(editedTodo);
    setEditedInd(editedTodoIndex);
    setSubmitName(SAVE_SUBMIT_NAME);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (submitName === ADD_SUBMIT_NAME) {
      const tmpArray = todos.slice();
      tmpArray.push(editedTodo);
      setTodos(tmpArray);
    } else {
      setTodos(todos.map((item, i) => ((i === editedInd) ? editedTodo: item )));
      setSubmitName(ADD_SUBMIT_NAME);
    }
    setEditedTodo('');
  };

  const handleChange = (evt) => {
    setEditedTodo(evt.target.value);
  };

  return(
    <section className="todos">
      <form name="todo-form" 
        className="todos__form"
        onSubmit={handleSubmit}
      >
        <input type="text" name="todo" 
          className="todos__input" 
          placeholder="Next task..." 
          value={editedTodo}
          onChange={handleChange}
        />
        <button type="submit"
          className="button todos__btn-submit"
          disabled={!editedTodo}
        >
          {submitName}
        </button>
      </form>

      <ul className="todos__list">
        {todos.map((todo, ind) => (
          <Todo todo={todo} ind={ind} key={ind}
            onCopy={handleCopyTodo} 
            onEdit={handleEditTodo} 
            onDelete={handleDeteleTodo}
            disabled={editedTodo} 
          />
        ))}
      </ul>
    </section>
  );
}

export default Main;