import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has the correct color', () => {
  render(<App />);

  // find element by text
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  // expect thet background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

  // click button
  fireEvent.click(colorButton);

  // expect background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});

  // expect the button text to be `Change to red`
  expect(colorButton.textContent).toBe('Change to red');
});


