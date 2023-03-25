import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from './Link';

export default {
  title: 'Components/Atoms/Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component: `[CT-0 Link](https://dept-uk.atlassian.net/wiki/spaces/clientnik/pages/8800623311436964432/Components) (Replace with actual component name and Confluence link).
        <br>
        <br>
        Also detail some additional level of component documentation here if necessary. Also accepts **markdown**.`,
      },
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args} />
);

export const Default = Template.bind({});
Default.args = {};
