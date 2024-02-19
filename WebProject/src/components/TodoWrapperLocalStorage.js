import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
uuidv4();

export const TodoWrapperLocalStorage = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Local Storage'dan veri alıp state'e atama
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  // Yeni bir görev atama fonksiyonu
  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  // Bir görev yapıldığında işaretlenme fonksiyonu
  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  // Bir görev silme fonksiyonu
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
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
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="TodoWrapper">
      <h1>To Do List</h1>
      {/* Yeni bir görev ekleme formu */}
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        className="search-input"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      {filteredTodos.map((todo, index) =>
        todo.isEditing
          ? ({
              /* Bir görev güncelleme formu */
            },
            (<EditTodoForm editTodo={editTask} task={todo} />))
          : ({
              /* Görevin bilgilerini içeren component */
            },
            (
              <Todo
                task={todo}
                key={index}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            ))
      )}
    </div>
  );
};
