import React from "react";
import "./textField.css";
import { Form, Input } from "antd";

const { TextArea } = Input;
const TextField = ({
  label,
  id = "",
  name,
  defaultValue,
  value,
  onBlur,
  type,
  disabled,
  className,
  required,
  placeholder,
  onChange,
  onFocus,
  password,
  onKeyPress,
  message,
  numb,
  ...rest
}) =>
{
 return (
      <div className="field">
        <Form.Item
          name={name}
          style={{ color: "#fe0003" }}
          rules={[
            {
              required: required,
              message: `Please input your ${name}!`,
            },
            {
              type: name === "email" ? name : type === "url" ? "url" : "",
              message: name === "email" ? `Please input a correct ${name}` : type === "url" ? `Please enter a valid ${name} url` : "",
            },
          ]}
          type={type}
          initialValue={value}
          label={label}
        >
          <input
            id={name}
            style={{
              border: '1px solid #E5E5E5',
              borderRadius: '1px'
            }}
            onBlur={onBlur}
            onFocus={onFocus}
            className={`${className}`}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            // defaultValue={value}
            onKeyPress={onKeyPress}
            disabled={disabled}
            required={required}
            {...rest}
          />
        </Form.Item>
      </div>
    );
};

export default TextField;


