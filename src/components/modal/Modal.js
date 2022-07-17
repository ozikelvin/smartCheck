import React from "react";

import Close from "../../assets/icons/close.svg";
import {SmallModalWrapper, SmallModalTitle, BackDrop} from './modal.styled'


export const SmallModal = ({ children, closeModal, title }) => {
  return (
    <>
      <BackDrop onClick={() => closeModal(false)}></BackDrop>

      <SmallModalWrapper>
        <div className="m-0 d-flex justify-content-between">
          <SmallModalTitle>{title}</SmallModalTitle>
          <img
            className="modalCloseImg"
            onClick={() => closeModal(false)}
            src={Close}
            alt={""}
          />
        </div>

        {children || "Enter element here"}
      </SmallModalWrapper>
    </>
  );
};


