import { ComponentMeta, ComponentStory } from '@storybook/react';
import ThreeImageFeature from './ThreeImageFeature';

export default {
  title: 'Components/Organisms/ThreeImageFeature',
  component: ThreeImageFeature,
  parameters: {
    docs: {
      description: {
        component: `[CT-0 ThreeImageFeature](https://dept-uk.atlassian.net/wiki/spaces/clientnik/pages/8800623311436964432/Components) (Replace with actual component name and Confluence link).
        <br>
        <br>
        Also detail some additional level of component documentation here if necessary. Also accepts **markdown**.`,
      },
    },
  },
} as ComponentMeta<typeof ThreeImageFeature>;

const Template: ComponentStory<typeof ThreeImageFeature> = (args) => (
  <ThreeImageFeature {...args} />
);

export const Default = Template.bind({});
Default.args = {};
