import { useEffect } from "react";
import { TodoType } from "./Type";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
    todo: TodoType[],
    deletTodo: (id: number) => void,
    handleChecked: (id: number) => void
}

const TodoList:React.FC<TodoListProps> = (props) => {
    const {todo, deletTodo, handleChecked} = props;

    useEffect(() => {
        console.log('change List 2');
     })

    return (
        <div>
            {
                todo.map(todo => <TodoItem key={todo.id} {...todo} deletTodo={deletTodo} handleChecked={handleChecked} />)
            }
        </div>
    )
}
export {TodoList}
