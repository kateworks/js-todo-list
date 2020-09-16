import React from 'react';

function Todo(props) {

  const handleCopyClick = () => { props.onCopy(); };

  const handleEditClick = () => { props.onEdit(); };

  const handleDeleteClick = () => { props.onDelete(); };

  return (
    <li className="todo">
      <p className="todo__text">{props.todo}</p>
      <button 
        className="todo__btn todo__btn_type_edit button"
        onClick={handleEditClick}
      />
      <button 
        className="todo__btn todo__btn_type_duplicate button"
        onClick={handleCopyClick}
      />
      <button 
        className="todo__btn todo__btn_type_delete button" 
        onClick={handleDeleteClick}
      />
    </li>
  );
}

export default Todo;