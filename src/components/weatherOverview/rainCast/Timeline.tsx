import classNames from 'classnames'
import React from 'react'
import { MinutelyWeatherForecast } from 'ts-open-weather-map'
import { strings } from '../../../constants/strings'
import { findLastIndex } from '../../../utils/arrayUtils'
import { formatDate, timeFormat } from '../../../utils/numberFormatter'
import { formatString } from '../../../utils/stringUtils'

type Props = {
  forecast: MinutelyWeatherForecast[]
  className: string
  timezoneOffset: number
}

const isRaining = (forecast: MinutelyWeatherForecast) => forecast.precipitation > 0

const getRainStatus = (forecast: MinutelyWeatherForecast[]) => {
  const isRainingNow = isRaining(forecast[0])
  const willRain = forecast.some(isRaining)
  const allRain = forecast.every(isRaining)
  const willFinish = !isRaining(forecast[forecast.length - 1])

  if (!willRain) return formatString(strings.RAIN_STATUS_NONE, forecast.length - 1)
  if (allRain) return formatString(strings.RAIN_STATUS_CONTINUING, forecast.length - 1)

  if (!isRainingNow && willRain)
    return formatString(strings.RAIN_STATUS_STARTING, forecast.findIndex(isRaining))

  if (isRainingNow && willFinish)
    return formatString(strings.RAIN_STATUS_FINISHING, findLastIndex(isRaining, forecast))

  return formatString(strings.RAIN_STATUS_INTERMITTENT, forecast.length - 1)
}

const getBarColor = (millimetres: number) => {
  if (millimetres === 0) return 'gray-300'
  if (millimetres < 2.5) return 'green-600'
  if (millimetres < 7.5) return 'yellow-300'
  if (millimetres < 50) return 'yellow-500'
  return 'red-600'
}

const Timeline: React.FC<Props> = ({ forecast, timezoneOffset, className }) => (
  <div
    className={classNames([
      'bg-white',
      'text-gray-900',
      'p-2',
      'rounded-lg',
      'bg-opacity-80',
      className,
    ])}
  >
    <p className="text-xs mb-1">{getRainStatus(forecast)}</p>
    <div className="text-xs flex flex-row justify-between mb-1">
      <span>{strings.TIME_NOW}</span>
      <span>{formatDate(forecast[29].dt + timezoneOffset, timeFormat)}</span>
      <span>{formatDate(forecast[59].dt + timezoneOffset, timeFormat)}</span>
    </div>
    <div className="flex flex-row h-3 mx-2 items-end gap-0.5">
      {forecast.map((minute, index) => (
        <div
          key={minute.dt}
          className={classNames([
            { 'timeline-tick': index % 15 === 0 },
            { 'timeline-tick-half': index % 15 !== 0 },
            `bg-${getBarColor(minute.precipitation)}`,
          ])}
        />
      ))}
    </div>
  </div>
)

export default Timeline
