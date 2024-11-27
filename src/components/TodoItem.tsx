import { useEffect } from "react";
import { TodoType } from "./Type";
import styled from 'styled-components';

const InputChecked = styled.input`
    width: 25px;
    height: 25px;
    
    & > span {
        width: 25px;
        height: 25px;  
        background-color: red;
    }
`;

interface TextProps {
    complyty: boolean
  }

const Titletext = styled.span<TextProps>`
    color: ${({complyty}) => complyty ? '#dd1f1f' : '#444'};
`

interface TodoItemProps extends TodoType {
    deletTodo: (id: number) => void,
    handleChecked: (id: number) => void
}

const TodoItem:React.FC<TodoItemProps> = (props) => {
    const {title, id, complyty, deletTodo, handleChecked} = props;

    useEffect(() => {
        console.log('change Item 3');
     })

    return (
        <div>
            <label>
                <InputChecked type='checkbox' checked={complyty} onChange={() => handleChecked(id)} />
                <span />
            </label>
            <Titletext>{title}</Titletext>
            <button onClick={() => deletTodo(id)}>Delet ToDo</button>
        </div>
    )
}
export {TodoItem}