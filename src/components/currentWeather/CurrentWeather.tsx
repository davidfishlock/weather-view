import React from 'react'
import { IconContext } from 'react-icons'
import { WiWindDeg } from 'react-icons/wi'
import { City, CurrentWeatherReport } from 'ts-open-weather-map'
import { strings } from '../../constants/strings'
import { getWeatherIcon } from '../../utils/iconUtils'
import {
  formatDate,
  formatMetresPerSecond,
  formatPercentage,
  formatPressure,
  formatTemperature,
} from '../../utils/numberFormatter'
import { toTitleCase } from '../../utils/stringUtils'

type Props = {
  location: City | { name: string; lat: number; lon: number }
  weather: CurrentWeatherReport
  timezoneOffset: number
}

const CurrentWeather: React.FC<Props> = ({ location, weather, timezoneOffset }) => {
  const weatherSummary = weather.weather[0]
  const icon = getWeatherIcon(weatherSummary.icon)

  return (
    <section className="card">
      <IconContext.Provider value={{ className: 'icon-lg' }}>
        <h3 className="text-2xl">{toTitleCase(location.name)}</h3>
        <p>{formatDate(weather.dt + timezoneOffset)}</p>
        <div className="flex flex-row">
          <div className="text-gray-700 -ml-2 mr-2">{icon ? React.createElement(icon) : null}</div>
          <div>
            <h4 className="text-xl">{toTitleCase(weatherSummary.description)}</h4>
            <p className="text-xl">
              {formatTemperature(weather.temp)}
              {Math.abs(weather.temp - weather.feelsLike) > 1 ? (
                <span className="text-sm ml-2 mb-1 inline-block align-middle">
                  ({strings.CURRENT_WEATHER_FEELS_LIKE} {formatTemperature(weather.feelsLike)})
                </span>
              ) : null}
            </p>
            <div className="grid grid-cols-2 mt-2 gap-x-2">
              <p>
                <span className="font-semibold">{strings.CURRENT_WEATHER_HUMIDITY}</span>{' '}
                {formatPercentage(weather.humidity)}
              </p>
              <p>
                <span className="font-semibold">{strings.CURRENT_WEATHER_UV}</span>{' '}
                {Math.round(weather.uvi)}
              </p>
              <p>
                <span className="font-semibold">{strings.CURRENT_WEATHER_WIND}</span>
                <WiWindDeg
                  className="h-6 w-6 ml-1 mb-0.5 inline"
                  style={{ transform: `rotate(${weather.windDeg}deg)` }}
                />
                {formatMetresPerSecond(weather.windSpeed)}
              </p>
              <p>
                <span className="font-semibold">{strings.CURRENT_WEATHER_PRESSURE}</span>{' '}
                {formatPressure(weather.pressure)}
              </p>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </section>
  )
}

export default CurrentWeather
