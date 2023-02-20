import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `[CT-0 Button](https://dept-uk.atlassian.net/wiki/spaces/clientnik/pages/8800623311436964432/Components) (Replace with actual component name and Confluence link).
        <br>
        <br>
        Also detail some additional level of component documentation here if necessary. Also accepts **markdown**.`,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {};
