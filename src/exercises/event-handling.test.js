/** @format */

import React from 'react';
import { mount } from 'enzyme';
import { EventHandling } from '.';

describe('EventHandling', () => {
  test('should log on click', () => {
    const mounted = mount(<EventHandling />);
    const logSpy = jest
      .spyOn(global.console, 'log')
      .mockImplementation(() => {});

    mounted.find('button').simulate('click');
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('click');

    logSpy.mockRestore();
    mounted.unmount();
  });
});
