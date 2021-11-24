import { HourlyWeatherForecast } from 'ts-open-weather-map'

// Anything above 7.5mm/h is normalize to 100% height on the graph
// This avoids more common low-ranged values from appearing very short
const MAX_HOURLY_PRECIPITATION = 7.5

type RangeInfo = {
  min: number
  max: number
  range: number
}

type PlotData = {
  x: number
  y: number
}

type LabelledPlotData = PlotData & {
  label: string
}

function getRangeInfo(values: number[]): RangeInfo {
  const min = Math.min(...values)
  const max = Math.max(...values)
  return { min, max, range: Math.abs(min - max) }
}

function getTemperaturePlotData(forecast: HourlyWeatherForecast[]) {
  return forecast.map((hour) => ({
    x: hour.dt,
    y: hour.temp,
  }))
}

function getScaledPrecipitationPlotData(
  temperatureRange: { min: number; max: number; range: number },
  forecast: HourlyWeatherForecast[],
): LabelledPlotData[] {
  return forecast.map((hour) => {
    const precipitationAmount = Math.max(hour.rain?.['1h'] ?? 0, hour.snow?.['1h'] ?? 0)
    const scaledPrecipitationAmount =
      temperatureRange.min -
      1 +
      (precipitationAmount / MAX_HOURLY_PRECIPITATION) * temperatureRange.range
    return {
      x: hour.dt,
      y: Math.min(scaledPrecipitationAmount, temperatureRange.max),
      label: precipitationAmount ? precipitationAmount + 'mm' : '',
    }
  })
}

export function getHourlyGraphData(forecast: HourlyWeatherForecast[]): {
  temperatureData: PlotData[]
  temperatureRange: RangeInfo
  precipitationData: LabelledPlotData[]
} {
  const temperatureData = getTemperaturePlotData(forecast)
  const temperatureRange = getRangeInfo(forecast.map((hour) => hour.temp))
  const precipitationData = getScaledPrecipitationPlotData(temperatureRange, forecast)
  return { temperatureData, temperatureRange, precipitationData }
}
