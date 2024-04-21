import { render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});


test('minus button hgas correct test', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
})


test('plus button hgas correct test', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
})