import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Counter from '../components/Counter'

it('Renders out starting text', () => {
  const {container} = render(<Counter />)
  expect(container.textContent).toContain("You've clicked 0 times")
})

it('Clicking counter-button increments state count', () => {
  const {getByTestId, container} = render(<Counter />)
  const button = getByTestId('counter-button')
  expect(container.textContent).toContain("You've clicked 0 times")
  fireEvent.click(button)
  expect(container.textContent).toContain("You've clicked 1 times")
  fireEvent.click(button)
  expect(container.textContent).toContain("You've clicked 2 times")
})

it('Clicking decrement-button decrements state count', () => {
  const {getByTestId, container} = render(<Counter />)
  const button = getByTestId('decrement-button')
  expect(container.textContent).toContain("You've clicked 0 times")
  fireEvent.click(button)
  expect(container.textContent).toContain("You've clicked -1 times")
})

it('Clicking both counter-button and decrement-button increments then decrements count', () => {
  const {getByTestId, container} = render(<Counter />)
  const counterButton = getByTestId('counter-button')
  const decrementButton = getByTestId('decrement-button')
  expect(container.textContent).toContain("You've clicked 0 times")
  fireEvent.click(counterButton)
  expect(container.textContent).toContain("You've clicked 1 times")
  fireEvent.click(decrementButton)
  expect(container.textContent).toContain("You've clicked 0 times")
})