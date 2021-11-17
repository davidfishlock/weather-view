import React from 'react'
import { IconContext } from 'react-icons'
import { DailyWeatherForecast } from 'ts-open-weather-map'
import { getWeatherIcon } from '../../../utils/iconUtils'
import { formatDate, formatTemperature } from '../../../utils/numberFormatter'

type Props = {
  forecast: DailyWeatherForecast[]
}

const Next7Days: React.FC<Props> = ({ forecast }) => (
  <section className="card mt-4">
    <IconContext.Provider value={{ className: 'icon-md' }}>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-y-4">
        {forecast.map((day) => {
          const icon = getWeatherIcon(day.weather[0].icon)
          return (
            <div key={day.dt} className="mr-2 flex flex-col items-center">
              <h3 className="font-semibold">{formatDate(day.dt)}</h3>
              <div className="text-gray-700 m-2">{icon ? React.createElement(icon) : null}</div>
              <p className="text-center text-sm">{day.weather[0].description}</p>
              <p>
                {formatTemperature(day.temp.max)} / {formatTemperature(day.temp.min)}
              </p>
            </div>
          )
        })}
      </div>
    </IconContext.Provider>
  </section>
)

export default Next7Days
