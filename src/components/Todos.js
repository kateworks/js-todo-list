import React from 'react';

function Todos() {
  return(
    <section className="todos">
      <form name="todo-form" className="todos__form">
        <input type="text" name="todo" className="todos__input" 
          placeholder="Next task..." />
        <button className="button todos__btn-submit">
          Add
        </button>
      </form>
      <ul className="todos__list" />
    </section>
  );
}

export default Todos;