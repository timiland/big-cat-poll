import { ComponentMeta, ComponentStory } from '@storybook/react';
import SideImageSection from './SideImageSection';

export default {
  title: 'Components/Organisms/SideImageSection',
  component: SideImageSection,
  parameters: {
    docs: {
      description: {
        component: `[CT-0 SideImageSection](https://dept-uk.atlassian.net/wiki/spaces/clientnik/pages/8800623311436964432/Components) (Replace with actual component name and Confluence link).
        <br>
        <br>
        Also detail some additional level of component documentation here if necessary. Also accepts **markdown**.`,
      },
    },
  },
} as ComponentMeta<typeof SideImageSection>;

const Template: ComponentStory<typeof SideImageSection> = (args) => (
  <SideImageSection {...args} />
);

export const Default = Template.bind({});
Default.args = {};
