import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { strings } from '../../../constants/strings'
import Modal from './Modal'

const onCloseMock = jest.fn()
const title = 'Some title'
const content = 'Some content'

function renderTarget() {
  render(
    <Modal onClose={onCloseMock} title={title}>
      {content}
    </Modal>,
  )
}

describe('CurrentWeather', () => {
  test('displays title', () => {
    renderTarget()
    expect(screen.getByText(title)).toBeInTheDocument()
  })

  test('displays content', () => {
    renderTarget()
    expect(screen.getByText(content)).toBeInTheDocument()
  })

  test('clicking close button closes Modal', () => {
    renderTarget()
    userEvent.click(screen.getByLabelText(strings.MODAL_CLOSE))
    expect(onCloseMock).toBeCalledTimes(1)
  })
})
