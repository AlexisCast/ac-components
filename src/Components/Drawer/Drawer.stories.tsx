import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Drawer, DrawerProps } from './Drawer';
import { Button } from '../Button/Button';

export default {
  title: 'Drawer',
  component: Drawer,
  decorators: [
    (Story) => (
      <div>
        <div id="backdrop-root"></div>
        <div id="portal-root"></div>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    onClose: {
      action: 'clicked',
    },
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'Default Drawer Content',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template1: Story<DrawerProps> = (args: DrawerProps) => {
  const [active, setIsActive] = useState(args.isOpen); // Initialize isOpen state

  const handleClose = () => {
    setIsActive(!active); // Set isOpen to false when onClose is called
  };

  return (
    <>
      <Drawer {...args} onClose={handleClose} isOpen={active} />
      <p>
        Reprehenderit laboris consectetur fugiat occaecat irure Lorem nisi
        aliquip labore. Commodo commodo ipsum ullamco nisi ut eiusmod proident
        magna amet incididunt exercitation nulla. Aliqua aliquip incididunt
        laboris aliquip officia consectetur mollit ad cillum. Cillum qui
        pariatur nostrud sunt sunt nisi et ut consequat. Eu consectetur est sint
        culpa excepteur. Amet esse minim fugiat pariatur nulla consectetur
        nulla. Cupidatat mollit elit elit cupidatat irure qui duis. Ut nostrud
        consectetur amet consectetur consectetur ipsum incididunt velit aliqua
        mollit cupidatat. Veniam ipsum proident pariatur exercitation nulla
        amet. Sit esse nisi aute labore commodo adipisicing aliquip sunt. Irure
        laborum in minim sint irure anim anim.
      </p>
      <p>
        Reprehenderit laboris consectetur fugiat occaecat irure Lorem nisi
        aliquip labore. Commodo commodo ipsum ullamco nisi ut eiusmod proident
        magna amet incididunt exercitation nulla. Aliqua aliquip incididunt
        laboris aliquip officia consectetur mollit ad cillum. Cillum qui
        pariatur nostrud sunt sunt nisi et ut consequat. Eu consectetur est sint
        culpa excepteur. Amet esse minim fugiat pariatur nulla consectetur
        nulla. Cupidatat mollit elit elit cupidatat irure qui duis. Ut nostrud
        consectetur amet consectetur consectetur ipsum incididunt velit aliqua
        mollit cupidatat. Veniam ipsum proident pariatur exercitation nulla
        amet. Sit esse nisi aute labore commodo adipisicing aliquip sunt. Irure
        laborum in minim sint irure anim anim.
      </p>
    </>
  );
};

export const Default1 = Template1.bind({});
Default1.args = {
  children: <div>Drawer Content</div>,
  isOpen: true,
};

const Template: Story<DrawerProps> = (args: { children: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Button onClick={toggleDrawer} variant="primary">
        Open Drawer
      </Button>
      <Drawer {...args} isOpen={isOpen} onClose={toggleDrawer}>
        {args.children}
        <Button onClick={toggleDrawer}>Exit Drawer</Button>
      </Drawer>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  onClose: () => {}, // Provide a function or use an empty function here
  children: (
    <div>
      <div>This is Content</div>
    </div>
  ),
};
