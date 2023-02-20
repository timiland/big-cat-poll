import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar from './NavBar';

export default {
  title: 'Components/Organisms/Navbar',
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component: `[CT-0 Navbar](https://dept-uk.atlassian.net/wiki/spaces/clientnik/pages/8800623311436964432/Components) (Replace with actual component name and Confluence link).
        <br>
        <br>
        Also detail some additional level of component documentation here if necessary. Also accepts **markdown**.`,
      },
    },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  _uid: '81b5dff1-da0a-485c-9aeb-9c51390ef8c9',
  logo: {
    id: 7128287,
    alt: 'timothy iland logo',
    name: '',
    focus: '',
    title: '',
    filename:
      'https://a.storyblok.com/f/196436/x/6cb0354f0e/signature-logo.svg',
    copyright: '',
    fieldtype: 'asset',
    is_external_url: false,
  },
  Links: [
    {
      url: 'https://www.ebay.co.uk/',
      _uid: '4764b165-a7f9-4cb1-b9da-435f48b1ed16',
      title: 'Link One',
      target: '_blank',
      component: 'link',
    },
    {
      url: 'https://www.ebay.co.uk/',
      _uid: '259ad363-1456-4901-bdda-c4f39c9bb818',
      title: 'Link Two',
      target: '_self',
      component: 'link',
    },
  ],
  component: 'navBar',
  linkArray: [
    {
      url: '/blog',
      _uid: '306b8d68-444c-437c-869e-aa58d27bb6e2',
      title: 'Blog',
      target: '_self',
      component: 'link',
    },
    {
      _uid: 'd7017c2e-5ce0-4660-a1e9-a2add769e696',
      Links: [
        {
          url: '/engineering',
          _uid: '85946f6c-9f1e-4b40-aacf-911677803585',
          title: 'Engineering',
          target: '_self',
          component: 'link',
        },
        {
          url: '/graphic-design',
          _uid: 'c401dc94-6c1d-4fe0-9553-d8d146c9586d',
          title: 'Graphic Design',
          target: '_self',
          component: 'link',
        },
        {
          url: '/web-development',
          _uid: 'c5668bef-0021-491d-b80c-b43c3fd96128',
          title: 'Web Development',
          target: '_self',
          component: 'link',
        },
      ],
      component: 'linkArray',
    },
  ],
  contactCta: 'Contact',
};
