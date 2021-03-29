import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonIcon from '..'

test('should render ButtonIcon', () => {
  const text = 'logar';

  render(
    <ButtonIcon text={text} />
  );

  expect(screen.getByText(text)).toBeInTheDocument();
  expect(screen.getByTestId('arrow-icon')).toBeInTheDocument();
});