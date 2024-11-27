import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 15px;
  margin: 0 auto;
  background-color: #588aaa;
  display: flex;
  justify-content: center;
  gap: 25px;
`;

interface FormAddTodoProps {
  changeValueTodo: (event: React.ChangeEvent<HTMLInputElement>) => void,
  valueTodo: string,
  addTodo: () => void,
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const FormAddTodo: React.FC<FormAddTodoProps> = (props) => {
  const { changeValueTodo, valueTodo, addTodo, handleKeyDown } = props;

  useEffect(() => {
    console.log('FormAddTodo 4');
 })

  return (
    <Container>
      <input value={valueTodo} onChange={changeValueTodo} onKeyDown={handleKeyDown} />
      <button onClick={addTodo} >Add new Todo</button>
    </Container>
  )
}
export {FormAddTodo};