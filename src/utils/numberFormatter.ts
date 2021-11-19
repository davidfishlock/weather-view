const locales = 'en-GB'

export function formatTemperature(temperature: number): string {
  return Intl.NumberFormat(locales, {
    style: 'unit',
    unit: 'celsius',
    maximumFractionDigits: 0,
  }).format(temperature)
}

export function formatPercentage(input: number): string {
  return Intl.NumberFormat(locales, {
    style: 'unit',
    unit: 'percent',
    maximumFractionDigits: 0,
  }).format(input)
}

export function formatMetresPerSecond(speed: number): string {
  return Intl.NumberFormat(locales, {
    style: 'unit',
    unit: 'meter-per-second',
    maximumFractionDigits: 1,
  }).format(speed)
}

export function formatPressure(input: number): string {
  return `${Intl.NumberFormat(locales, {
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
  return Intl.DateTimeFormat(locales, options).format(new Date(timestamp * 1000))
}
