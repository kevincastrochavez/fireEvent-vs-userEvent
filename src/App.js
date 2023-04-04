import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    onHoverActivated: false,
    onClickActivated: false,
    onTypeActivated: false,
    onFocusActivated: false,
  });
  const {
    onHoverActivated,
    onClickActivated,
    onTypeActivated,
    onFocusActivated,
  } = state;

  const handleOnHover = () => {
    setState((current) => ({ ...current, onHoverActivated: true }));
  };

  const handleOnClick = () => {
    setState((current) => ({ ...current, onClickActivated: true }));
  };

  const handleOnType = () => {
    setState((current) => ({ ...current, onTypeActivated: true }));
  };

  const handleOnFocus = () => {
    setState((current) => ({ ...current, onFocusActivated: true }));
  };

  return (
    <div className='App'>
      <section>
        <div>
          <button
            type='button'
            data-testid='button-target'
            onClick={handleOnClick}
            onMouseOver={handleOnHover}
          >
            This will have hover and click events assigned!
          </button>
          <span data-testid='on-hover-span'>{onHoverActivated.toString()}</span>
          <span data-testid='on-click-span'>{onClickActivated.toString()}</span>
        </div>
      </section>
      <section>
        <div>
          <input
            type='text'
            onFocus={handleOnFocus}
            onKeyDown={handleOnType}
            data-testid='input-target'
          />
          <span data-testid='on-type-span'>{onTypeActivated.toString()}</span>
          <span data-testid='on-focus-span'>{onFocusActivated.toString()}</span>
        </div>
      </section>
    </div>
  );
}

export default App;
