import { render, screen } from '@testing-library/react'
import { strings } from '../../constants/strings'
import { testIds } from '../../constants/testIds'
import { DEFAULT_ONECALL_RESPONSE } from '../../testUtils/sampleData'
import AlertItem from './AlertItem'

function renderTarget() {
  render(<AlertItem alert={DEFAULT_ONECALL_RESPONSE.alerts[0]} />)
}

describe('Alert', () => {
  test('displays alert title', () => {
    renderTarget()
    expect(screen.getByText(DEFAULT_ONECALL_RESPONSE.alerts[0].event)).toBeInTheDocument()
  })

  test('displays alert description', () => {
    renderTarget()
    expect(screen.getByTestId(testIds.ALERT_DESCRIPTION)).toHaveTextContent(
      DEFAULT_ONECALL_RESPONSE.alerts[0].description.replace(/\n/g, ' '),
    )
  })

  test('displays alert duration', () => {
    renderTarget()
    expect(
      screen.getByText(
        `${strings.ALERT_VALID_FROM} November 18 at 10:57 AM - November 18 at 2:00 PM`,
      ),
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
