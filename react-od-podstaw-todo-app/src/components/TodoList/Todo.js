import React from 'react';

function Todo(props) {
  const { todo } = props;
  return (
    <div className="Todo">
      <span>{todo}</span>
    </div>
  )
}

export default Todo;