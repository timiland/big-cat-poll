import IconSizeEnum from '@models/enums/IconSizeEnum';
import { ComponentStory } from '@storybook/react';
import Icon from './Icon';

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,

  parameters: {
    docs: {
      description: {
        component: `More information about adding icons to the project in the Iconography documentation.`,
      },
    },
  },
};

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: IconSizeEnum.xl,
  name: 'vimeo',
  colorClassName: '',
  className: '',
};
