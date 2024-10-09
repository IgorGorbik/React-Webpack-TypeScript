import { RegisterOptions } from 'react-hook-form';

const errorMessages = {
  required: 'Field is required',
};

export const requiredValidator: RegisterOptions['required'] = {
  value: true,
  message: errorMessages.required,
};
