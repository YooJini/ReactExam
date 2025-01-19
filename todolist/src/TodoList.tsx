import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import TodoModal from "./TodoModal";

type Todo = {
  id: number;
  content: string;
  isChecked: boolean;
};

const TodoList: React.FC = () => {
  const title: string = "오늘 할 일";

  // 구조 분해 할당
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, content: "공부하기", isChecked: false },
    { id: 1, content: "운동하기", isChecked: false },
    { id: 2, content: "잠자기", isChecked: false },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");

  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo|null>(null);

  const handleCheckedChange = (itemId: number) => {
    setTodos((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), content: newTodo, isChecked: false },
      ]);
      setNewTodo("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div>
      <h1>{title}</h1>
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="할 일을 입력해주세요."
            style={{ marginRight: "10px", writingMode: "horizontal-tb" }}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button variant="light" onClick={addTodo}>
            추가
          </Button>
        </div>
        <p></p>
        <div className="board">
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  onChange={() => {
                    handleCheckedChange(todo.id);
                  }}
                ></input>
                <span onClick={()=>handleTodoClick(todo)}>
                  {todo.isChecked ? (
                    <del>{todo.content}</del>
                  ) : (
                    <span>{todo.content}</span>
                  )}
                </span>
                <button
                  className="del-button"
                  onClick={() => removeTodo(todo.id)}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <TodoModal show={showDetail} todo = {selectedTodo} handleClose={handleCloseDetail}></TodoModal>
    </div>
  );
};

export default TodoList;
