import { InputBox, InputLabel, InputWrapper } from "./InputField.styled";

import { InputFieldProps } from "./InputField.d";
import React from "react";

const InputField: React.FC<InputFieldProps> = ({ label, fillValue }) => (
  <InputWrapper>
    <InputLabel>{label}</InputLabel>
    <InputBox type="text" value={fillValue} readOnly={true} />
  </InputWrapper>
);

export default InputField;
