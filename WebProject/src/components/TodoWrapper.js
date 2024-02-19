import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  // Yeni bir görev atama fonksiyonu
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  // Bir görev silme fonksiyonu
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  // Bir görev yapıldığında işaretlenme fonksiyonu
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  // Bu fonksiyon, bir görevin todos durum dizisindeki isEditing özelliğini açıp kapatma işlevini üstlenir.
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  // Bu fonksiyon, bir görev düzenlendiğinde görev içeriğini (task özelliği) güncelleme işlevini üstlenir.
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>To Do List</h1>
      {/* Yeni bir görev ekleme formu */}
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          ({
            /* Bir görev güncelleme formu */
          },
          (<EditTodoForm editTodo={editTask} task={todo} />))
        ) : (
          {
            /* Görevin bilgilerini içeren component */
          },
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
