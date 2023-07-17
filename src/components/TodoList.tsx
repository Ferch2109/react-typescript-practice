import React from "react";
import { Listable, Todo } from '../models/Types';
import TodoItem from './TodoItem';

interface TodoListProps {
    items: Listable,
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({items, onDeleteTodo}) => {
    return (
        <ul id='list'>
            { items.map( todo => <TodoItem key={todo.id} todo={todo} onDelete={onDeleteTodo}/>) }
        </ul>
    );
};

export default TodoList;