import { useState } from 'react';
import { FormAddTodo } from './components/FormAddTodo';

const App = () => {
  const [valueTodo, setValueTodo] = useState('');

  const changeValueTodo: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueTodo(e.target.value);
  }

  return (
    <>
      <FormAddTodo valueTodo={valueTodo} changeValueTodo={changeValueTodo} />
    </>
  )
}
export default App;