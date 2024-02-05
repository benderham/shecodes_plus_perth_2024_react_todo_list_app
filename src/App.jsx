import { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    'Walk the doggos',
    'Feed the doggos',
    'Buy Ben a beer',
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
