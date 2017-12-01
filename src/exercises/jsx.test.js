/** @format */

import React from 'react';
import { shallow } from 'enzyme';
import { Jsx } from '.';

describe('jsx', () => {
  test('should render jsx', () => {
    const rendered = shallow(<Jsx />);
    expect(rendered.exists()).toBe(true);
    expect(rendered.type()).not.toBeNull();
  });
});
