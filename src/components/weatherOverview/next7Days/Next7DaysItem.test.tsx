import { render, screen } from '@testing-library/react'
import React from 'react'
import { DailyWeatherForecast } from 'ts-open-weather-map'
import { strings } from '../../../constants/strings'
import { DEFAULT_ONECALL_RESPONSE } from '../../../testUtils/sampleData'
import Next7DaysItem from './Next7DaysItem'

function renderTarget(forecast: DailyWeatherForecast, isToday = false) {
  render(
    <Next7DaysItem
      forecast={forecast}
      isToday={isToday}
      timezoneOffset={DEFAULT_ONECALL_RESPONSE.timezoneOffset}
    />,
  )
}

describe('Next7DaysItem', () => {
  test('displays today for today item', () => {
    renderTarget(DEFAULT_ONECALL_RESPONSE.daily[0], true)
    expect(screen.getByText(strings.NEXT_7_DAYS_TODAY)).toBeInTheDocument()
  })

  test('displays weekday for subsequent items', () => {
    renderTarget(DEFAULT_ONECALL_RESPONSE.daily[1])
    expect(screen.getByText('Fri')).toBeInTheDocument()
  })

  test('displays weather description', () => {
    renderTarget(DEFAULT_ONECALL_RESPONSE.daily[0])
    expect(screen.getByText('rain and snow')).toBeInTheDocument()
  })

  test('displays min and max temperatures', () => {
    renderTarget(DEFAULT_ONECALL_RESPONSE.daily[0])
    expect(screen.getByText('8°C / -1°C')).toBeInTheDocument()
  })
})
