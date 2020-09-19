import React, { useState } from 'react';
import Todo from './Todo';
import {initialTodos} from '../utils/todos-init';

function Main() {
  const ADD_SUBMIT_NAME = 'Add';
  const SAVE_SUBMIT_NAME = 'Save';

  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState('');
  const [editedInd, setEditedInd] = useState(-1);
  const [submitName, setSubmitName] = useState(ADD_SUBMIT_NAME);

  const getTodoText = (todoIndex) => {
    return todos[todoIndex];
  };

  const handleDeteleTodo = (deletedTodoIndex) => {
    setTodos(todos.filter((item, index) => (
      index !== deletedTodoIndex
    )));
  };

  const handleCopyTodo = (copiedTodoIndex) => {
    const tmpArray = todos.slice();
    const copiedTodoText = getTodoText(copiedTodoIndex);
    tmpArray.splice(copiedTodoIndex, 0, copiedTodoText);
    setTodos(tmpArray);
  };

  const handleEditTodo = (editedTodoIndex) => {
    setInputValue(getTodoText(editedTodoIndex));
    setEditedInd(editedTodoIndex);
    setSubmitName(SAVE_SUBMIT_NAME);
  };

  const addNewTodo = () => {
    const tmpArray = todos.slice();
    tmpArray.push(inputValue);
    setTodos(tmpArray);
  };

  const saveEditedTodo = () => {
    setTodos(todos.map((item, i) => (
      (i === editedInd) ? inputValue: item 
    )));
    setSubmitName(ADD_SUBMIT_NAME);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (editedInd === -1) {
      addNewTodo();
    } else {
      saveEditedTodo();
    }
    setInputValue('');
  };

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
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
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit"
          className="button todos__btn-submit"
          disabled={!inputValue}
        >
          {submitName}
        </button>
      </form>

      <ul className="todos__list">
        {todos.map((todo, todoIndex) => (
          <Todo todo={todo} index={todoIndex} key={todoIndex}
            onCopy={handleCopyTodo} 
            onEdit={handleEditTodo} 
            onDelete={handleDeteleTodo}
            disabled={inputValue} 
          />
        ))}
      </ul>
    </section>
  );
}

export default Main;