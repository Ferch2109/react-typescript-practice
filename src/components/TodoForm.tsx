import React, { FormEvent, FormEventHandler, useRef } from "react";
import { Todo } from '../models/Types';

interface TodoFormProps {
    onAddTodo: (todo: Todo) => void
}

const TodoForm: React.FC<TodoFormProps> = ({onAddTodo}) => {
    const inputTextRef = useRef<HTMLInputElement>(null);

    const submitHandler: FormEventHandler = (event: FormEvent<any>): void => {
        event.preventDefault();
        const todo: Todo = {
            id: Math.random().toString(),
            text: inputTextRef.current!.value
        }
        onAddTodo(todo);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="todo">Todo</label>
                <input id="todo" type="text" ref={inputTextRef}/>
            </div>
            <button type="submit">Add todo</button>
        </form>
    );
};

export default TodoForm;