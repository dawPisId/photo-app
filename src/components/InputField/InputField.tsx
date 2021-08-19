import { InputBox, InputLabel, InputWrapper } from "./InputField.styled";

import React from "react";

interface InputProps {
  label: string,
  fillValue: string
}

const InputField = ({ label, fillValue }:InputProps) => (
  <InputWrapper>
    <InputLabel>{label}</InputLabel>
    <InputBox type="text" value={fillValue} readOnly={true} />
  </InputWrapper>
);

export default InputField;
