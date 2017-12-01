/** @format */

import React from 'react';
import { mount } from 'enzyme';
import { HandlerPassing } from './handler-passing';

describe('HandlerPassing', () => {
  test('should log on click', () => {
    const handlerSpy = jest.fn();
    const mounted = mount(<HandlerPassing handler={handlerSpy} />);

    mounted.find('button').simulate('click');

    expect(handlerSpy).toHaveBeenCalledTimes(1);
  });
});
