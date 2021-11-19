import React from 'react'
import { DailyWeatherForecast } from 'ts-open-weather-map'
import { strings } from '../../constants/strings'
import { testIds } from '../../constants/testIds'
import { getWeatherIcon } from '../../utils/iconUtils'
import { formatDate, formatTemperature, shortDateFormat } from '../../utils/numberFormatter'
import { toTitleCase } from '../../utils/stringUtils'

type Props = {
  forecast: DailyWeatherForecast
  isToday: boolean
}

const Next7DaysItem: React.FC<Props> = ({ forecast, isToday }) => {
  const icon = getWeatherIcon(forecast.weather[0].icon)
  return (
    <div
      data-testid={testIds.NEXT_7_DAYS_ITEM}
      key={forecast.dt}
      className="mr-2 flex flex-col items-center"
    >
      <h3 className="font-semibold">
        {isToday ? strings.NEXT_7_DAYS_TODAY : formatDate(forecast.dt, shortDateFormat)}
      </h3>
      <div className="text-gray-700 m-2">{icon ? React.createElement(icon) : null}</div>
      <p className="text-center text-sm">{toTitleCase(forecast.weather[0].description)}</p>
      <p>
        {formatTemperature(forecast.temp.max)} / {formatTemperature(forecast.temp.min)}
      </p>
    </div>
  )
}

export default Next7DaysItem