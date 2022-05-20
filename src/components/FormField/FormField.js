import React from 'react';
import { Wrapper, Label, Input } from './FormField.style';

const FormField = ({ onChange, value, label, name, type }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={`Plase enter ${name}`}
      />
    </Wrapper>
  );
};

export default FormField;
