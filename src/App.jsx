import { useState } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([
    'Walk the doggos',
    'Feed the doggos',
    'Buy Ben a beer',
  ]);

  return (
    <>
      <h1>todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
    </>
  );
}

export default App;
