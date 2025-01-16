import React, { useState } from "react";
import Button from "react-bootstrap/Button";

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
          <Button variant="light" onClick={addTodo}>추가</Button>
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
                <span>
                  {todo.isChecked ? (
                    <del>{todo.content}</del>
                  ) : (
                    <span>{todo.content}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
