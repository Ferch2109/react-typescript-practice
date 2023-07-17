import React from "react";
import { Todo } from "../models/Types";

interface TodoItemProps {
    todo: Todo,
    onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete}) => {
    const {id, text} = todo;
    console.log(id, text)
    return (
        <li key={'li-'+id}>
            <div>
                <p>{text}</p>
                <button onClick={onDelete.bind(null, id)}>Remove</button>
            </div>
        </li>
    );
}

export default TodoItem;