import {
  formatDate,
  formatPercentage,
  formatPressure,
  formatTemperature,
  formatWindSpeed,
  fullDateTimeFormat,
  getUnitsForLocale,
  shortDateFormat,
  shortDateTimeFormat,
  timeFormat,
} from './numberFormatter'

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
        jest.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

        const formattedValue = formatTemperature(value)
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
        jest.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

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
      jest.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

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
      jest.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

      const formattedValue = formatPressure(value)
      expect(formattedValue).toEqual(expected)
    })
  })

  describe('formatDate', () => {
    const shortDateTheories = [
      ['en-GB', 1637584109, 'Mon, 22 Nov'],
      ['en-US', 1637584109, 'Mon, Nov 22'],
      ['fr-FR', 1637584109, 'lun. 22 nov.'],
      ['de-DE', 1637584109, 'Mo., 22. Nov.'],
    ] as const

    test.each(shortDateTheories)(
      'locale %p and value %p returns short date format %p',
      (locale, value, expected) => {
        jest.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

        const formattedValue = formatDate(value, shortDateFormat)
        expect(formattedValue).toEqual(expected)
      },
    )

    const shortDateTimeTheories = [
      ['en-GB', 1637584109, '22 November, 12:28'],
      ['en-US', 1637584109, 'November 22, 12:28 PM'],
      ['fr-FR', 1637584109, '22 novembre, 12:28'],
      ['de-DE', 1637584109, '22. November, 12:28'],
    ] as const

    test.each(shortDateTimeTheories)(
      'locale %p and value %p returns short datetime format %p',
      (locale, value, expected) => {
        jest.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

        const formattedValue = formatDate(value, shortDateTimeFormat)
        expect(formattedValue).toEqual(expected)
      },
    )

    const fullDateTimeTheories = [
      ['en-GB', 1637584109, '22 November 2021, 12:28'],
      ['en-US', 1637584109, 'November 22, 2021, 12:28 PM'],
      ['fr-FR', 1637584109, '22 novembre 2021, 12:28'],
      ['de-DE', 1637584109, '22. November 2021, 12:28'],
    ] as const

    test.each(fullDateTimeTheories)(
      'locale %p and value %p returns full datetime format %p',
      (locale, value, expected) => {
        jest.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

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
        jest.spyOn(navigator, 'language', 'get').mockReturnValue(locale)

        const formattedValue = formatDate(value, timeFormat)
        expect(formattedValue).toEqual(expected)
      },
    )
  })
})
