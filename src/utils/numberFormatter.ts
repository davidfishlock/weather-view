import { MeasurementUnit } from 'ts-open-weather-map'

function isImperialLocale(locale: string): boolean {
  return locale.startsWith('my') || locale === 'en-US'
}

export function getUnitsForLocale(locale: string): MeasurementUnit {
  return isImperialLocale(locale) ? 'imperial' : 'metric'
}

export function formatTemperature(temperature: number, digits = 0): string {
  const locale = window.navigator.language
  return Intl.NumberFormat(locale, {
    style: 'unit',
    unit: isImperialLocale(locale) ? 'fahrenheit' : 'celsius',
    maximumFractionDigits: digits,
  }).format(temperature)
}

export function formatPercentage(input: number): string {
  return Intl.NumberFormat(window.navigator.language, {
    style: 'unit',
    unit: 'percent',
    maximumFractionDigits: 0,
  }).format(input)
}

export function formatWindSpeed(speed: number): string {
  const locale = window.navigator.language
  const isImperial = isImperialLocale(locale)
  return Intl.NumberFormat(locale, {
    style: 'unit',
    unit: isImperial ? 'mile-per-hour' : 'meter-per-second',
    maximumFractionDigits: isImperial ? 0 : 1,
  }).format(speed)
}

export function formatPressure(input: number): string {
  return `${Intl.NumberFormat(window.navigator.language, {
    maximumFractionDigits: 0,
    useGrouping: false,
  }).format(input)}hPa`
}

export const shortDateFormat = {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
} as const

export const shortDateTimeFormat = {
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
} as const

export const fullDateTimeFormat = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
} as const

export const timeFormat = {
  hour: 'numeric',
  minute: 'numeric',
} as const

export function formatDate(
  timestamp: number,
  options: Intl.DateTimeFormatOptions = fullDateTimeFormat,
): string {
  return Intl.DateTimeFormat(window.navigator.language, options).format(new Date(timestamp * 1000))
}
