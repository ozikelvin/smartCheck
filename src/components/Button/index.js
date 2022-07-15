import React from "react";

import { ButtonContainer } from "./button.styled";
import LoadingOutlined from "@ant-design/icons/LoadingOutlined"

const Button = ({
  onClick = () => {},
  label = "button",
  icon,
  variant = "",
  className = "",
  disabled,
  type,
  loading,
  style,
  ...rest
}) => {
  return (
    <ButtonContainer
      onClick={onClick}
      type={type}
      style={style}
      disabled={loading}
      className={`${variant} ${className}`}
      {...rest}
    >
        {loading ? <LoadingOutlined style={{ position: "relative", bottom: "5px" }} />: label}
    </ButtonContainer>
  );
};

export default Button;
