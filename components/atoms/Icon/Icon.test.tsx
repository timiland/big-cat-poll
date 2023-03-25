import { composeStories } from '@storybook/testing-react';
import { render } from '@utils/jest.utils';
import * as stories from './Icon.stories';

const { Default } = composeStories(stories);

describe('Icon', () => {
  it('should render', async () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
