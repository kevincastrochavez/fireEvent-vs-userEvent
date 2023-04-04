import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App container', () => {
  const renderApp = () => render(<App />);

  it('renders the app', () => {
    renderApp();
    expect(screen.getByTestId('on-hover-span')).toBeInTheDocument();
  });
});

describe('button control', () => {
  const renderApp = () => render(<App />);
  const onClickValue = true;
  const onHoverValue = true;

  // it('clicks the button using fireEvent', () => {
  //   renderApp();
  //   fireEvent.click(screen.getByTestId('button-target'));

  //   expect(screen.getByTestId('on-click-span')).toHaveTextContent(onClickValue);
  //   expect(screen.getByTestId('on-hover-span')).toHaveTextContent(onHoverValue);
  // });

  it('clicks the button using userEvent', () => {
    renderApp();
    userEvent.click(screen.getByTestId('button-target'));

    expect(screen.getByTestId('on-click-span')).toHaveTextContent(onClickValue);
    expect(screen.getByTestId('on-hover-span')).toHaveTextContent(onHoverValue);
  });
});
