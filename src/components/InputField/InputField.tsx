import { InputBox, InputLabel, InputWrapper } from "./InputField.styled";
import React, { FC } from "react";

import { InputFieldProps } from "./InputField.d";

/**
 * Input field used mostly in the Profile page.
 */
const InputField: FC<InputFieldProps> = ({ label, fillValue }) => (
  <InputWrapper>
    <InputLabel>{label}</InputLabel>
    <InputBox type="text" value={fillValue} readOnly={true} />
  </InputWrapper>
);

export default InputField;
