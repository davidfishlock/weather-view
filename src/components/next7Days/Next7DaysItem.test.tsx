import { render, screen } from '@testing-library/react'
import React from 'react'
import { DailyWeatherForecast } from 'ts-open-weather-map'
import { strings } from '../../constants/strings'
import { DEFAULT_ONECALL_RESPONSE } from '../../testUtils/sampleData'
import Next7DaysItem from './Next7DaysItem'

function renderTarget(forecast: DailyWeatherForecast, isToday = false) {
  render(<Next7DaysItem forecast={forecast} isToday={isToday} />)
}

describe('Next7DaysItem', () => {
  test('displays today for today item', () => {
    renderTarget(DEFAULT_ONECALL_RESPONSE.daily[0], true)
    expect(screen.getByText(strings.NEXT_7_DAYS_TODAY)).toBeInTheDocument()
  })

  test('displays date for subsequent items', () => {
    renderTarget(DEFAULT_ONECALL_RESPONSE.daily[1])
    expect(screen.getByText('Fri, 19 Nov')).toBeInTheDocument()
  })

  test('displays weather description in title case', () => {
    renderTarget(DEFAULT_ONECALL_RESPONSE.daily[1])
    expect(screen.getByText('Moderate Rain')).toBeInTheDocument()
  })

  test('displays min and max temperatures', () => {
    renderTarget(DEFAULT_ONECALL_RESPONSE.daily[0])
    expect(screen.getByText('8°C / -1°C')).toBeInTheDocument()
  })
})
