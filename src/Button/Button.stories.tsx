import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  children: 'Text',
};

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
};

export const DefaultWithAdditionalStyles = Template.bind({});

DefaultWithAdditionalStyles.args = {
  children: 'Text',
  // className: 'color: red',
  additionalStyles: { backgroundColor: 'yellow', fontSize: '20px' },
};
