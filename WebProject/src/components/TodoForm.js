import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // value doluysa addTodo fonksiyonunu çalıştır
        if (value) {
          addTodo(value);
          // Value'yu temizle
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What are we doing?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}
