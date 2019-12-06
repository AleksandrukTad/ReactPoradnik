import React from "react";

function Modal({ children, isOpen }) {
  if (!isOpen) return null;
  
  return (
    <>
      <div className="Overlay" />
      <div className="Modal">{children}</div>
    </>
  )
}

export default Modal;