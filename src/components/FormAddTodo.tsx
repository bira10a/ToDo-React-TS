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
  addTodo: () => void
}

const FormAddTodo: React.FC<FormAddTodoProps> = (props) => {
  const { changeValueTodo, valueTodo, addTodo } = props;

  return (
    <Container>
      <input value={valueTodo} onChange={changeValueTodo} />
      <button onClick={addTodo} >Add new Todo</button>
    </Container>
  )
}
export {FormAddTodo};