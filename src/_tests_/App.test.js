import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../App';
import NavigationBar from '../Components/NavigationBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders routingExample comp', () => {
  const wrapper = shallow(<App />);
  const content = <NavigationBar />;
  expect(wrapper.contains(content)).toEqual(true);
});
