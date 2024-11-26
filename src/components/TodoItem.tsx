import { useEffect } from "react";
import { TodoType } from "./Type";

interface TodoItemProps extends TodoType {
    deletTodo: (id: number) => void
}

const TodoItem:React.FC<TodoItemProps> = (props) => {
    const {title, id, complyty, deletTodo} = props;

    useEffect(() => {
        console.log('change Item');
     })

    return (
        <div>
            <input type='checkbox' checked={complyty} />
            {title}
            <button onClick={() => deletTodo(id)}>Delet ToDo</button>
        </div>
    )
}
export {TodoItem}