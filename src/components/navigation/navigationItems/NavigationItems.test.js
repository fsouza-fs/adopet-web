import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NavigationItems } from './NavigationItems';
import NavigationItem from './navigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItems /> tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems isAuth={false} />);
  });

  it('should render two <NavigationItem /> elements if not authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('should render four <NavigationItem /> elements if authenticated', () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(4);
  });

  it('should have a logout button', () => {
    wrapper.setProps({ isAuth: true });
    expect(
      wrapper.contains(
        <NavigationItem link="/admin/logout">Logout</NavigationItem>
      )
    ).toEqual(true);
  });
});
