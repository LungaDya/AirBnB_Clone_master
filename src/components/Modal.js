import "./Modal.css";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../actions/modalAction";

const Modal = () => {
  const dispatch = useDispatch();

  const modal = useSelector((state) => state.modal);
  const { openClose, content } = modal;

  let ModalInlineStyle;

  if (openClose === "open") {
    ModalInlineStyle = {
      display: "block",
    };
  } else {
    ModalInlineStyle = {
      display: "none",
    };
  }
  const closeModalHandler = () => {
    dispatch(openModal("close", ""));
  };
  const ModalForm = () => {
    dispatch(openModal("open", ""));
  };
  return (
    <div className="site-modal" style={ModalInlineStyle}>
      <div className="modal-content">
        <div className="col right">
          <span onClick={closeModalHandler} className="close">
            &times;
          </span>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
