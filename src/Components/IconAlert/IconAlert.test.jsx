import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import IconAlert from './IconAlert';

describe('IconAlertComponent', () => {
  it('is defined', () => {
    const wrapper = shallow(
      <IconAlert type="message-o" number={4} link="/profile/" alt="text" />,
    );
    expect(wrapper).toBeDefined();
  });

  it('matches snapshot', () => {
    const wrapper = shallow(
      <IconAlert type="message-o" number={4} link="/profile/" alt="text" />,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('matches snapshot with a number greater than the limit', () => {
    const wrapper = shallow(
      <IconAlert type="message-o" number={6} limit={5} useLimit link="/profile/" alt="text" />,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('matches snapshot when number = 0', () => {
    const wrapper = shallow(
      <IconAlert type="message-o" number={0} link="/profile/" alt="text" />,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});