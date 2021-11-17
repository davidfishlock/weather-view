import { render, screen, within } from '@testing-library/react'
import React from 'react'
import { strings } from '../../../constants/strings'
import { DEFAULT_ONECALL_RESPONSE } from '../../../testUtils/sampleData'
import CurrentWeather from './CurrentWeather'

const location = { name: 'Some Location', lat: 0, lon: 0 }

const renderTarget = function () {
  render(<CurrentWeather location={location} weather={DEFAULT_ONECALL_RESPONSE.current} />)
}

describe('CurrentWeather', () => {
  test('displays location name', () => {
    renderTarget()
    expect(screen.getByText(location.name)).toBeInTheDocument()
  })

  test('displays date', () => {
    renderTarget()
    expect(screen.getByText('16/11/2021')).toBeInTheDocument()
  })

  test('displays image with alt text', () => {
    renderTarget()
    expect(screen.getByAltText('Clouds')).toBeInTheDocument()
  })

  test('displays weather description', () => {
    renderTarget()
    expect(screen.getByText('Broken Clouds')).toBeInTheDocument()
  })

  test('displays temperature', () => {
    renderTarget()
    expect(screen.getByText('11°C (Feels like: 10°C)')).toBeInTheDocument()
  })

  test('displays humidity', () => {
    renderTarget()

    const humidityElement = screen.getByText(strings.CURRENT_WEATHER_HUMIDITY).parentElement
    if (!humidityElement) throw new Error('humidityElement not found')
    expect(within(humidityElement).getByText('92%')).toBeInTheDocument()
  })

  test('displays UV index', () => {
    renderTarget()

    const uvElement = screen.getByText(strings.CURRENT_WEATHER_UV).parentElement
    if (!uvElement) throw new Error('uvElement not found')
    expect(within(uvElement).getByText('0')).toBeInTheDocument()
  })

  test('displays wind speed', () => {
    renderTarget()

    const windElement = screen.getByText(strings.CURRENT_WEATHER_WIND).parentElement
    if (!windElement) throw new Error('windElement not found')
    expect(within(windElement).getByText('1.1 m/s')).toBeInTheDocument()
  })

  test('displays atmospheric pressure', () => {
    renderTarget()

    const pressureElement = screen.getByText(strings.CURRENT_WEATHER_PRESSURE).parentElement
    if (!pressureElement) throw new Error('pressureElement not found')
    expect(within(pressureElement).getByText('1012hPa')).toBeInTheDocument()
  })
})
