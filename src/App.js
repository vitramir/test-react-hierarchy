import React, { useState } from "react";
import "./App.css";

export const PresentationOne = props => {
  return <div>{props.children}</div>;
};

export const PresentationTwo = props => {
  return <div>{props.children}</div>;
};

export const ComponentWithState = props => {
  const [state, setState] = useState(Math.random());
  return state;
};

export const ToggleButton = props => {
  return <div onClick={props.toggleEffect}></div>;
};

const App = () => {
  const [applyEffect, setApplyEffect] = useState(false);
  const toggleEffect = () => {
    setApplyEffect(!applyEffect);
  };
  return (
    <div className="App">
      {applyEffect ? (
        <PresentationOne>
          <ComponentWithState />
        </PresentationOne>
      ) : (
        <PresentationTwo>
          <ComponentWithState />
        </PresentationTwo>
      )}
      <ToggleButton toggleEffect={toggleEffect} />
    </div>
  );
};

export default App;
