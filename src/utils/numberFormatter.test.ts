import {
  formatDate,
  formatPercentage,
  formatPrecipitation,
  formatPressure,
  formatTemperature,
  formatWindSpeed,
  fullDateTimeFormat,
  getUnitsForLocale,
  shortDateFormat,
  shortDateTimeFormat,
  timeFormat,
} from './numberFormatter'
import { vi } from 'vitest'

describe('numberFormatter', () => {
  describe('getUnitsForLocale', () => {
    const localeTheories = [
      ['en-GB', 'metric'],
      ['fr-FR', 'metric'],
      ['en-US', 'imperial'],
      ['my-MY', 'imperial'],
    ] as const

    test.each(localeTheories)('locale %p returns %p', (locale, expected) => {
      const units = getUnitsForLocale(locale)
      expect(units).toEqual(expected)
    })
  })

  describe('formatTemperature', () => {
    const temperatureTheories = [
      ['en-GB', 20, '20°C'],
      ['en-US', 100, '100°F'],
    ] as const

    test.each(temperatureTheories)(
      'locale %p and value %p returns %p',
      (locale, value, expected) => {
        vi.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

        const formattedValue = formatTemperature(value)
        expect(formattedValue).toEqual(expected)
      },
    )
  })

  describe('formatPrecipitation', () => {
    const temperatureTheories = [
      ['en-GB', 1000.2, '1,000.2mm'],
      ['en-US', 1000.2, '1,000.2mm'],
      ['fr-FR', 1000.2, '1000,2mm'],
      ['de-DE', 1000.2, '1.000,2mm'],
    ] as const

    test.each(temperatureTheories)(
      'locale %p and value %p returns %p',
      (locale, value, expected) => {
        vi.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

        const formattedValue = formatPrecipitation(value)
        expect(formattedValue).toEqual(expected)
      },
    )
  })

  describe('formatPercentage', () => {
    const percentageTheories = [
      ['en-GB', 20, '20%'],
      ['en-US', 100, '100%'],
    ] as const

    test.each(percentageTheories)(
      'locale %p and value %p returns %p',
      (locale, value, expected) => {
        vi.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

        const formattedValue = formatPercentage(value)
        expect(formattedValue).toEqual(expected)
      },
    )
  })

  describe('formatWindSpeed', () => {
    const speedTheories = [
      ['en-GB', 100, '100 m/s'],
      ['en-US', 100, '100 mph'],
    ] as const

    test.each(speedTheories)('locale %p and value %p returns %p', (locale, value, expected) => {
      vi.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

      const formattedValue = formatWindSpeed(value)
      expect(formattedValue).toEqual(expected)
    })
  })

  describe('formatPressure', () => {
    const speedTheories = [
      ['en-GB', 1020, '1020hPa'],
      ['en-US', 1020, '1020hPa'],
    ] as const

    test.each(speedTheories)('locale %p and value %p returns %p', (locale, value, expected) => {
      vi.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

      const formattedValue = formatPressure(value)
      expect(formattedValue).toEqual(expected)
    })
  })

  describe('formatDate', () => {
    const shortDateTheories = [
      ['en-GB', 1637584109, '22 Nov'],
      ['en-US', 1637584109, 'Nov 22'],
      ['fr-FR', 1637584109, '22 nov.'],
      ['de-DE', 1637584109, '22. Nov.'],
    ] as const

    test.each(shortDateTheories)(
      'locale %p and value %p returns short date format %p',
      (locale, value, expected) => {
        vi.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

        const formattedValue = formatDate(value, shortDateFormat)
        expect(formattedValue).toEqual(expected)
      },
    )

    const shortDateTimeTheories = [
      ['en-GB', 1637584109, '22 November at 12:28'],
      ['en-US', 1637584109, 'November 22 at 12:28 PM'],
      ['fr-FR', 1637584109, '22 novembre à 12:28'],
      ['de-DE', 1637584109, '22. November um 12:28'],
    ] as const

    test.each(shortDateTimeTheories)(
      'locale %p and value %p returns short datetime format %p',
      (locale, value, expected) => {
        vi.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

        const formattedValue = formatDate(value, shortDateTimeFormat)
        expect(formattedValue).toEqual(expected)
      },
    )

    const fullDateTimeTheories = [
      ['en-GB', 1637584109, '22 November 2021 at 12:28'],
      ['en-US', 1637584109, 'November 22, 2021 at 12:28 PM'],
      ['fr-FR', 1637584109, '22 novembre 2021 à 12:28'],
      ['de-DE', 1637584109, '22. November 2021 um 12:28'],
    ] as const

    test.each(fullDateTimeTheories)(
      'locale %p and value %p returns full datetime format %p',
      (locale, value, expected) => {
        vi.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

        const formattedValue = formatDate(value, fullDateTimeFormat)
        expect(formattedValue).toEqual(expected)
      },
    )

    const timeTheories = [
      ['en-GB', 1637584109, '12:28'],
      ['en-US', 1637584109, '12:28 PM'],
      ['fr-FR', 1637584109, '12:28'],
      ['de-DE', 1637584109, '12:28'],
    ] as const

    test.each(timeTheories)(
      'locale %p and value %p returns time format %p',
      (locale, value, expected) => {
        vi.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

        const formattedValue = formatDate(value, timeFormat)
        expect(formattedValue).toEqual(expected)
      },
    )
  })
})
