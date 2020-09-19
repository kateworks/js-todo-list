import React from 'react';

function Todo({todo, index, onEdit, onCopy, onDelete, disabled}) {

  const handleCopyClick = () => { 
    onCopy(index); 
  };

  const handleEditClick = () => { 
    onEdit(index); 
  };

  const handleDeleteClick = () => { 
    onDelete(index); 
  };

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