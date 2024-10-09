import { within } from '@testing-library/react';
import { user } from './testUtils';

export const Fields = (container: HTMLElement) => {
  const checkTextFieldValue = (label: string, value: string) => {
    const input = within(container).getByLabelText<HTMLInputElement>(label);
    expect(input.value).toBe(value);
  };

  const fillTextFieldValue = async (label: string, value: string | null) => {
    const input = within(container).getByLabelText(label);
    await user.clear(input);
    if (value) {
      await user.type(input, value);
    }
  };
  return {
    fillTextFieldValue,
    checkTextFieldValue,
  };
};
