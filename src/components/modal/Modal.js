import React from "react";
import "./modal.css";
import Close from "../../assets/icons/close.svg";



export const SmallModal = ({ children, closeModal, title }) => {
  return (
    <>
      <div className="backDrop" onClick={() => closeModal(false)}></div>

      <div className="small-modal">
        <div className="m-0 d-flex justify-content-between">
          <p className="kv-modal-title">{title}</p>
          <img
            className="modalCloseImg"
            onClick={() => closeModal(false)}
            src={Close}
            alt={""}
          />
        </div>

        {children || "Enter element here"}
      </div>
    </>
  );
};


