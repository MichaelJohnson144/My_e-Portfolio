import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';
import { Stack } from '@mui/material';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Stack component={'button'} maxWidth={300}>
    <Button {...args} />
  </Stack>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
