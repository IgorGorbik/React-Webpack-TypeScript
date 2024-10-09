import { SubmitHandler, useForm } from 'react-hook-form';
import { TextFormField } from '.';
import type { Meta, StoryFn } from '@storybook/react';
import { useCallback } from 'react';
import { Button, Stack } from '@mui/material';

export default {
  title: 'Example/TextFormField',
  component: TextFormField,
} satisfies Meta<typeof TextFormField>;

type Fields = { login: string };

const Template: StoryFn<Omit<typeof TextFormField, 'control' | 'name'>> = (args) => {
  const { control, handleSubmit, reset } = useForm<Fields>({ defaultValues: { login: '' } });

  const onSubmit = useCallback<SubmitHandler<Fields>>((fields) => {
    console.log(fields);
  }, []);

  const onReset = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack width={250} gap={1}>
        <TextFormField control={control} name="login" {...args} />
        <Stack direction="row" gap={1}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
          <Button variant="outlined" onClick={onReset}>
            Reset
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export const Input = Template.bind({});

Input.args = {
  label: 'Login',
  required: true,
  disabled: false,
};

Input.storyName = 'TextFormField';
