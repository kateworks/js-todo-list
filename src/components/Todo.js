import React from 'react';

function Todo({todo, onEdit, onCopy, onDelete}) {

  const handleCopyClick = () => { onCopy(todo); };

  const handleEditClick = () => { onEdit(todo); };

  const handleDeleteClick = () => { onDelete(todo); };

  return (
    <li className="todo">
      <p className="todo__text">{todo}</p>
      <button 
        className="todo__btn todo__btn_type_edit button"
        title="Edit item"
        onClick={handleEditClick}
      />
      <button 
        className="todo__btn todo__btn_type_duplicate button"
        title="Copy item"
        onClick={handleCopyClick}
      />
      <button 
        className="todo__btn todo__btn_type_delete button" 
        title="Delete item"
        onClick={handleDeleteClick}
      />
    </li>
  );
}

export default Todo;