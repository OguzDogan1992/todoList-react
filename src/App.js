import React, { useState } from 'react'
import './App.css';

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  }

  return (

    <div>
      <div className='container'>
        <div className='nav'>
          <h1>To Do List</h1>
          <div className='userInput'>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => addTodo(input)}>Add</button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='todos'>
            {list.map((todo) => (
              <div className='items' key={todo.id}>
                <div className='item'>{todo.todo}</div>
                <button className='deleteButton' onClick={() => deleteTodo(todo.id)}>&times;</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App