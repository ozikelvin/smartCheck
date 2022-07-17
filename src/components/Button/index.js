import React from "react";

import { ButtonContainer } from "./button.styled";
import LoadingOutlined from "@ant-design/icons/LoadingOutlined"

const Button = ({
  onClick = () => { },
  label = "button",
  icon,
  variant = "",
  className = "",
  disabled,
  type,
  loading,
  style,
  ...rest
}) =>
{
  return (
    <ButtonContainer
      {...rest}
      type={type} style={style}
      onClick={onClick} disabled={loading}
      className={`${variant} ${className}`}
    >
      {loading ? <LoadingOutlined style={{ position: "relative", bottom: "5px" }} /> : label}
    </ButtonContainer>
  );
};

export default Button;
