import { useEffect } from "react";
import { TodoType } from "./Type";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
    todo: TodoType[],
    deletTodo: (id: number) => void
}

const TodoList:React.FC<TodoListProps> = (props) => {
    const {todo, deletTodo} = props;

    useEffect(() => {
        console.log('change List');
     })

    return (
        <div>
            {
                todo.map(todo => <TodoItem key={todo.id} {...todo} deletTodo={deletTodo} />)
            }
        </div>
    )
}
export {TodoList}
