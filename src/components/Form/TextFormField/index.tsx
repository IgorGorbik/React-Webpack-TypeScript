import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldValues,
  Path,
  UseControllerProps,
} from 'react-hook-form';
import { TextField } from '@mui/material';
import { useMemo } from 'react';
import { requiredValidator } from '../validators';

type Props<Fields extends FieldValues> = Omit<
  React.ComponentProps<typeof TextField>,
  keyof ControllerRenderProps<Fields, Path<Fields>> | 'error'
> & {
  control?: Control<Fields>;
  disabled?: boolean;
  name: Path<Fields>;
};

export const TextFormField = <Fields extends FieldValues>({
  name,
  control,
  disabled = false,
  required,
  ...props
}: Props<Fields>) => {
  const rules = useMemo<UseControllerProps<Fields>['rules']>(() => {
    const value: UseControllerProps<Fields>['rules'] = {};

    if (required) {
      value.required = requiredValidator;
    }

    return value;
  }, [required]);

  return (
    <Controller
      name={name}
      control={control}
      disabled={disabled}
      rules={rules}
      render={({ fieldState: { error }, field }) => (
        <TextField
          {...field}
          error={error !== undefined}
          variant="standard"
          {...props}
          helperText={error?.message ?? props.helperText}
        />
      )}
    />
  );
};
