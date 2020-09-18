import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import {initialTodos} from '../utils/todos-init';

function Main() {
  const ADD_SUBMIT_NAME = 'Add';
  const SAVE_SUBMIT_NAME = 'Save';

  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState('');
  const [editedInd, setEditedInd] = useState(-1);
  const [submitName, setSubmitName] = useState(ADD_SUBMIT_NAME);

  const handleDeteleTodo = (ind) => {
    setTodos(todos.filter((item, i) => (i !== ind)));
  };

  const handleCopyTodo = (todo, ind) => {
    const tmpArray = todos.slice();
    tmpArray.splice(ind, 0, todo);
    setTodos(tmpArray);
  };

  const handleEditTodo = (todo, ind) => {
    setEditedTodo(todo);
    setEditedInd(ind);
    setSubmitName(SAVE_SUBMIT_NAME);
  };

  const handleSubmitClick = (evt) => {
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

  useEffect(() => {
    console.log('Reading initial data...');
    setTodos(initialTodos);
  }, []);

  return(
    <section className="todos">
      <form name="todo-form" className="todos__form">

        <input type="text" name="todo" 
          className="todos__input" 
          placeholder="Next task..." 
          value={editedTodo}
          onChange={handleChange}
        />

        <button type="submit"
          className="button todos__btn-submit"
          disabled={!editedTodo}
          onClick={handleSubmitClick}
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