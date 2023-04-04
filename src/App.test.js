import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

  // it('clicks the button using fireEvent', async () => {
  //   renderApp();
  //   const button = await screen.getByTestId('button-target')
  //   fireEvent.click(button);

  //   const click = await screen.getByTestId('on-click-span')
  //   const hover = await screen.getByTestId('on-hover-span')

  //   await waitFor(() => {
  //     expect(click).toHaveTextContent(onClickValue);
  //     expect(hover).toHaveTextContent(onHoverValue);
  //   })
  // });

  it('clicks the button using userEvent', async () => {
    renderApp();
    const button = await screen.getByTestId('button-target')
    userEvent.click(button);

    const click = await screen.getByTestId('on-click-span')
    const hover = await screen.getByTestId('on-hover-span')

    await waitFor(() => {
      expect(click).toHaveTextContent(onClickValue);
      expect(hover).toHaveTextContent(onHoverValue);
    })
  });
});

describe("input control", () => {
  const renderApp = () => render(<App />);
  const onTypeValue = true;
  const onFocusValue = true;

  it('clicks the button using userEvent', async () => {
    renderApp();
    const input = await screen.getByTestId("input-target");
    userEvent.type(input, "hello");

    const focus = await screen.getByTestId("on-focus-span");
    const type = await screen.getByTestId("on-type-span");
    
    await waitFor(() => {
      expect(input).toHaveDisplayValue("hello");
      expect(focus).toHaveTextContent(onFocusValue);
      expect(type).toHaveTextContent(onTypeValue);
    })
  });
});