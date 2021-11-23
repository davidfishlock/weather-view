import classNames from 'classnames'
import React from 'react'
import { IconContext } from 'react-icons'
import { DailyWeatherForecast } from 'ts-open-weather-map'
import Next7DaysItem from './Next7DaysItem'

type Props = {
  forecast: DailyWeatherForecast[]
  timezoneOffset: number
  className?: string
}

const Next7Days: React.FC<Props> = ({ forecast, timezoneOffset, className }) => (
  <section className={classNames(['card', className])}>
    <IconContext.Provider value={{ className: 'icon-gray icon-md' }}>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-y-4">
        {forecast.map((day, index) => (
          <Next7DaysItem
            key={`DayItem:${day.dt}`}
            timezoneOffset={timezoneOffset}
            forecast={day}
            isToday={index === 0}
          />
        ))}
      </div>
    </IconContext.Provider>
  </section>
)

export default Next7Days
