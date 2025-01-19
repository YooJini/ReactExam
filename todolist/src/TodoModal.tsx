import React from "react";
import { Modal } from "react-bootstrap";

type Todo = {
  id: number;
  content: string;
  isChecked: boolean;
};

type todoModalProps = {
  show: boolean;
  todo: Todo|null;
  handleClose: () => void;
};

const TodoModal: React.FC<todoModalProps> = ({show, todo, handleClose}) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>상세 정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>{todo?.content}</Modal.Body>
      </Modal>
    </div>
  );
};

export default TodoModal;
