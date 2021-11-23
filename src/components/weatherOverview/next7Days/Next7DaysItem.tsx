import React from 'react'
import { DailyWeatherForecast } from 'ts-open-weather-map'
import { strings } from '../../../constants/strings'
import { testIds } from '../../../constants/testIds'
import { getWeatherIcon } from '../../../utils/iconUtils'
import { formatDate, formatTemperature, shortDateFormat } from '../../../utils/numberFormatter'

type Props = {
  forecast: DailyWeatherForecast
  isToday: boolean
  timezoneOffset: number
}

const Next7DaysItem: React.FC<Props> = ({ forecast, isToday, timezoneOffset }) => {
  const icon = getWeatherIcon(forecast.weather[0].icon)
  return (
    <div
      data-testid={testIds.NEXT_7_DAYS_ITEM}
      key={forecast.dt}
      className="mr-2 flex flex-col items-center"
    >
      <h3 className="font-semibold">
        {isToday
          ? strings.NEXT_7_DAYS_TODAY
          : formatDate(forecast.dt + timezoneOffset, shortDateFormat)}
      </h3>
      <div className="m-2">{icon ? React.createElement(icon) : null}</div>
      <p>
        {formatTemperature(forecast.temp.max)} / {formatTemperature(forecast.temp.min)}
      </p>
      <p className="text-center text-sm capitalize">{forecast.weather[0].description}</p>
    </div>
  )
}

export default Next7DaysItem
