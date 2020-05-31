import React from 'react';
import { render, findByText, fireEvent } from '@testing-library/react';
// import { getByTestId } from '@testing-library/dom';
import BackButton from './BackButton';

test('render back button', () => {
  let path = '/home/cs394';
  let setPath = jest.fn();
  const {getByTestId } = render(<BackButton state={{path, setPath}}/>);
  const backElement = getByTestId("backButton");
  expect(backElement).toBeInTheDocument();
  fireEvent.click(backElement);
  expect(getByTestId("parentLoc")).toHaveTextContent("/home")
});
