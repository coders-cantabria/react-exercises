/** @format */

import React from 'react';
import { render } from 'enzyme';
import { PropsRender } from './props-render';

describe('PropsRender', () => {
  test('should render pass props', () => {
    const passedString = 'passed string';
    const rendered = render(<PropsRender subTitle={passedString} />);
    expect(rendered.text()).toMatch(passedString);
  });
});
