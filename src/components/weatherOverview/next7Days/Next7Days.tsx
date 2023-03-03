import classNames from 'classnames'
import React from 'react'
import { IconContext } from 'react-icons'
import { DailyWeatherForecast } from 'ts-open-weather-map'
import Next7DaysItem from './Next7DaysItem'
import { strings } from '../../../constants/strings'

type Props = {
  forecast: DailyWeatherForecast[]
  timezoneOffset: number
  className?: string
}

const Next7Days: React.FC<Props> = ({ forecast, timezoneOffset, className }) => (
  <section aria-labelledby="next7DaysHeader" className={classNames(['card', className])}>
    <h2 id="next7DaysHeader" className="sr-only">
      {strings.NEXT_7_DAYS}
    </h2>
    <IconContext.Provider value={{ className: 'icon-gray icon-md' }}>
      <ul className="grid grid-cols-4 lg:grid-cols-8 gap-y-4 gap-x-2">
        {forecast.map((day, index) => (
          <Next7DaysItem
            key={`DayItem:${day.dt}`}
            timezoneOffset={timezoneOffset}
            forecast={day}
            isToday={index === 0}
          />
        ))}
      </ul>
    </IconContext.Provider>
  </section>
)

export default Next7Days
