import { render, screen } from '@testing-library/react'
import React from 'react'
import { strings } from '../../constants/strings'
import { DEFAULT_ONECALL_RESPONSE } from '../../testUtils/sampleData'
import Alert from './Alert'

function renderTarget() {
  render(<Alert alert={DEFAULT_ONECALL_RESPONSE.alerts[0]} />)
}

describe('Alert', () => {
  test('displays alert description', () => {
    renderTarget()
    expect(screen.getByText(DEFAULT_ONECALL_RESPONSE.alerts[0].description)).toBeInTheDocument()
  })

  test('displays alert duration', () => {
    renderTarget()
    expect(
      screen.getByText(`${strings.ALERT_VALID_FROM} 17 November, 08:00 - 17 November, 21:00`),
    ).toBeInTheDocument()
  })

  test('displays alert data provider', () => {
    renderTarget()
    expect(
      screen.getByText(
        `${strings.ALERT_PROVIDER} ${DEFAULT_ONECALL_RESPONSE.alerts[0].senderName}`,
      ),
    ).toBeInTheDocument()
  })
})
