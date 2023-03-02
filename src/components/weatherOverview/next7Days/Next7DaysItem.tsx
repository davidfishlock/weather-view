import React from 'react'
import { DailyWeatherForecast } from 'ts-open-weather-map'
import { strings } from '../../../constants/strings'
import { testIds } from '../../../constants/testIds'
import { getWeatherIcon } from '../../../utils/iconUtils'
import {
  formatDate,
  formatTemperature,
  longWeekdayFormat,
  shortWeekdayFormat,
} from '../../../utils/numberFormatter'

type Props = {
  forecast: DailyWeatherForecast
  isToday: boolean
  timezoneOffset: number
}

const Next7DaysItem: React.FC<Props> = ({ forecast, isToday, timezoneOffset }) => {
  const icon = getWeatherIcon(forecast.weather[0].icon)
  return (
    <li
      data-testid={testIds.NEXT_7_DAYS_ITEM}
      key={forecast.dt}
      className="flex flex-col items-center text-center"
    >
      <h3
        className="strong-text"
        aria-label={
          isToday
            ? strings.NEXT_7_DAYS_TODAY
            : formatDate(forecast.dt + timezoneOffset, longWeekdayFormat)
        }
      >
        {isToday
          ? strings.NEXT_7_DAYS_TODAY
          : formatDate(forecast.dt + timezoneOffset, shortWeekdayFormat)}
      </h3>
      <div className="m-2">{icon ? React.createElement(icon) : null}</div>
      <p className="text-sm">
        {formatTemperature(forecast.temp.max)} / {formatTemperature(forecast.temp.min)}
      </p>
      <p className="text-sm capitalize">{forecast.weather[0].description}</p>
    </li>
  )
}

export default Next7DaysItem
