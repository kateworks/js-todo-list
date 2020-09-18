import React from 'react';

function Todo({todo, ind, onEdit, onCopy, onDelete, disabled}) {

  const handleCopyClick = () => { onCopy(todo, ind); };

  const handleEditClick = () => { onEdit(todo, ind); };

  const handleDeleteClick = () => { onDelete(ind); };

  return (
    <li className="todo">
      <p className="todo__text">{todo}</p>
      <button 
        className="button todo__btn todo__btn_type_edit"
        title="Edit item"
        disabled={disabled}
        onClick={handleEditClick}
      />
      <button 
        className="button todo__btn todo__btn_type_duplicate"
        title="Copy item"
        disabled={disabled}
        onClick={handleCopyClick}
      />
      <button 
        className="button todo__btn todo__btn_type_delete" 
        title="Delete item"
        disabled={disabled}
        onClick={handleDeleteClick}
      />
    </li>
  );
}

export default Todo;