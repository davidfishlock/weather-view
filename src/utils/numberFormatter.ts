export function formatTemperature(temperature: number): string {
  return Intl.NumberFormat('en-gb', {
    style: 'unit',
    unit: 'celsius',
    maximumFractionDigits: 0,
  }).format(temperature)
}

export function formatPercentage(input: number): string {
  return Intl.NumberFormat('en-gb', {
    style: 'unit',
    unit: 'percent',
    maximumFractionDigits: 0,
  }).format(input)
}

export function formatMetresPerSecond(speed: number): string {
  return Intl.NumberFormat('en-gb', {
    style: 'unit',
    unit: 'meter-per-second',
    maximumFractionDigits: 1,
  }).format(speed)
}

export function formatPressure(input: number): string {
  return `${Intl.NumberFormat('en-gb', {
    maximumFractionDigits: 0,
    useGrouping: false,
  }).format(input)}hPa`
}

export function formatDate(timestamp: number): string {
  return Intl.DateTimeFormat('en-gb').format(new Date(timestamp * 1000))
}
