import { render, screen } from '@testing-library/react'
import React from 'react'
import { HourlyWeatherForecast } from 'ts-open-weather-map'
import { DEFAULT_ONECALL_RESPONSE } from '../../../testUtils/sampleData'
import HourlyGraphOverlay from './HourlyGraphOverlay'

function renderTarget(forecast: HourlyWeatherForecast) {
  render(<HourlyGraphOverlay forecast={forecast} />)
}

describe('HourlyGraphOverlay', () => {
  test('displays weather type', () => {
    const forecast = DEFAULT_ONECALL_RESPONSE.hourly[0]
    renderTarget(forecast)
    expect(screen.getByText('Clouds')).toBeInTheDocument()
  })

  test('displays temperature', () => {
    const forecast = DEFAULT_ONECALL_RESPONSE.hourly[0]
    renderTarget(forecast)
    expect(screen.getByText('0°C')).toBeInTheDocument()
  })

  test('does not display precipitation when zero', () => {
    const forecast = DEFAULT_ONECALL_RESPONSE.hourly[0]
    renderTarget(forecast)
    expect(screen.queryByText('mm')).not.toBeInTheDocument()
  })

  test('displays combined precipitation when raining or snowing', () => {
    const forecast = DEFAULT_ONECALL_RESPONSE.hourly[1]
    renderTarget(forecast)
    expect(screen.getByText('1.1mm')).toBeInTheDocument()
  })
})
