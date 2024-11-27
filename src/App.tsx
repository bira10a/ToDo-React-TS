import { useState, useEffect } from 'react';
import { TodoType } from './components/Type';
import { FormAddTodo } from './components/FormAddTodo';
import { TodoList } from './components/TodoList';

const App = () => {
  const [valueTodo, setValueTodo] = useState('');
  const [todo, setTodo] = useState<TodoType[]>([]);

  const changeValueTodo: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueTodo(e.target.value);
  }

  const addTodo = () => {
     if (valueTodo) {
      setTodo([...todo, {
        title: valueTodo,
        id: Date.now(),
        complyty: false
      }])
    }
    setValueTodo('');
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === 'Enter') {
      if (valueTodo) {
        setTodo([...todo, {
          title: valueTodo,
          id: Date.now(),
          complyty: false
        }])
      }
      setValueTodo('');
    }
  }

  const deletTodo = (id: number) => {
    setTodo(todo.filter(todo => {
      if (todo.id != id) return todo;      
    }))
  }

  const handleChecked = (id: number) => {
    setTodo(todo.map(todo => {
      if (todo.id != id) return todo;

      return {
        ...todo,
        complyty: !todo.complyty
      }
    }))
  }

  useEffect(() => {
    console.log('change APP 1');
 })

  return (
    <>
      <FormAddTodo valueTodo={valueTodo} changeValueTodo={changeValueTodo} addTodo={addTodo} handleKeyDown={handleKeyDown} />
      <TodoList todo={todo} deletTodo={deletTodo} handleChecked={handleChecked} />
    </>
  )
}
export default App;