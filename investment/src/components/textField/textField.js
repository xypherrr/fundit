import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 42px;
  input {
    width: 100%;
    height: 100%;
    background: #e8e5e5;
    border: none;
    padding: 0 15px;
  }
  /* input[type="date" i] {
    border: none;
  } */
  input[type="file"] {
    padding: 10px 15px;
  }
`;

const HelpSpan = styled.div`
  font-weight: normal;
  margin-top: 16px;
  font-size: 12px;
  color: #828d93;
`;

const ErrorSpan = styled.div`
  font-weight: normal;
  margin-top: 6px;
  font-size: 12px;
  color: red;
`;

const TextField = (props) => {
  const {
    className,
    errors,
    helpText,
    id,
    label,
    name,
    register,
    type,
    validationSchema,
    accept,
  } = props;

  return (
    <Wrapper className={className}>
      <input
        id={id}
        name={name}
        placeholder={label}
        type={type}
        accept={accept}
        {...register(name, validationSchema)}
      />
      {helpText && <HelpSpan>{helpText}</HelpSpan>}
      {errors && errors[name]?.type === "required" && (
        <ErrorSpan className="error">{errors[name]?.message}</ErrorSpan>
      )}
      {errors && errors[name]?.type === "pattern" && (
        <ErrorSpan className="error">{errors[name]?.message}</ErrorSpan>
      )}
      {errors && errors[name]?.type === "validate" && (
        <ErrorSpan className="error">{errors[name]?.message}</ErrorSpan>
      )}
      {errors && errors[name]?.type === "minLength" && (
        <ErrorSpan className="error">{errors[name]?.message}</ErrorSpan>
      )}
    </Wrapper>
  );
};

export default TextField;
