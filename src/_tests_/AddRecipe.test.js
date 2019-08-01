import React from "react";
// import { shallow } from "enzyme";
import renderer from 'react-test-renderer';

import AddRecipe from "../Components/AddRecipe";

// it("render a label", () => {
//   const wrapper = shallow(<AddRecipe />);
//   expect(wrapper).toMatchSnapshot();
// });

it('snapshot AddRecipe', () => {
  const tree = renderer.create(<AddRecipe/>).toJSON()
  expect(tree).toMatchSnapshot();
})