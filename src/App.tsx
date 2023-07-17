import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Listable, Todo } from './models/Types';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Listable>([]);

  const addTodoHandler = (todo: Todo):void => {
    setTodos(prevTodos => [...prevTodos, todo]);
  }

  const deleteTodoHandler = (id: string): void => {
    const todoIdx = todos.findIndex(t => t.id === id);
    setTodos(prevTodos => prevTodos.filter(t => t.id !== id));
  }

  return (
    <div className="App">
      <TodoForm onAddTodo={addTodoHandler}/>
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler}/>
    </div>
  );
}

export default App;
