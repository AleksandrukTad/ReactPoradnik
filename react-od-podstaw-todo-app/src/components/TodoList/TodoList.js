import React, { useState } from 'react';

import Todo from './Todo';

function TodoList(props) {
  // const [todoList, setTodoList] = useState([]);
  // const [inputValue, setInputValue] = useState("");
  let [todoListState, setTodoListState] = useState({ todos: [], inputValue: "", error: ""})

  const handleInputChange = (event) => {
    const { value } = event.target;
    // setInputValue(value);
    setTodoListState({
      ...todoListState,
      inputValue: value
    })
  }

  const handleButtonClick = () => {
    const { todos } = todoListState;

    if(!inputValue) return;

    if(todos.some(todo => todo === inputValue)) {
      setTodoListState({
        ...todoListState,
        error: "To zadanie juz istnieje",
        inputValue: "",
      });

      return;
    }

    setTodoListState({
      error: "",
      todos: [...todos, inputValue],
      inputValue: ""
    })
  }

  const handleTodoRemove = (todoValue) => {
    setTodoListState({
      ...todoListState,
      todos: todos.filter(todo => todo !== todoValue)
    });
  }

  const { error, todos, inputValue } = todoListState;

  return (
    <div className="TodoList">
      <h1>
        My Todo App
      </h1>
      <input
        className="Input"
        name="Todo Input"
        placeholder="What are we doing today?"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="Button"
        onClick={handleButtonClick}
      >
        Add
      </button>
      {!!error &&
        <p>
          {error}
        </p>
      }
      {todos.map((todo) => (
        <Todo
          key={todo}
          todo={todo}
          handleCloseClick={handleTodoRemove}
        />
      ))}
    </div>
  )
}

export default TodoList;