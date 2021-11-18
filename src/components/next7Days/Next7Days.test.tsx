import { render, screen } from '@testing-library/react'
import React from 'react'
import { testIds } from '../../constants/testIds'
import { DEFAULT_ONECALL_RESPONSE } from '../../testUtils/sampleData'
import Next7Days from './Next7Days'

function renderTarget() {
  render(<Next7Days forecast={DEFAULT_ONECALL_RESPONSE.daily} />)
}

describe('Next7Days', () => {
  test('displays an item for each of the next 7 days', () => {
    renderTarget()
    expect(screen.queryAllByTestId(testIds.NEXT_7_DAYS_ITEM)).toHaveLength(8)
  })
})
