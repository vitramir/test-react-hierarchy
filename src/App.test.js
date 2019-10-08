import React from "react";
// import ReactDOM from "react-dom";
import { create, act } from "react-test-renderer";
import App, { ToggleButton, ComponentWithState } from "./App";

it("renders without crashing", () => {
  const app = create(<App />);

  const compWithState = app.root.findByType(ComponentWithState);
  const initialState = compWithState.children[0];

  const toggleButton = app.root.findByType(ToggleButton);

  act(() => {
    toggleButton.props.toggleEffect();
  });

  const newCompWithState = app.root.findByType(ComponentWithState);
  const newState = newCompWithState.children[0];

  expect(newState).toMatch(initialState);
});
