import React from "react";
import { Listable } from "../models/Types";

interface TodoListProps {
    items: Listable
}

const TodoList: React.FC<TodoListProps> = ({items}) => {
    return (
        <ul id='list'>
            { items.map( ({id, text}) => <li key={id}> {text} </li> ) }
        </ul>
    );
};

export default TodoList;