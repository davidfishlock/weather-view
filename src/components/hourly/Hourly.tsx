import React from 'react'
import { FlexibleXYPlot, LabelSeries, LineSeries, VerticalBarSeries, XAxis, YAxis } from 'react-vis'
import { HourlyWeatherForecast } from 'ts-open-weather-map'
import '../../../node_modules/react-vis/dist/style.css'
import { strings } from '../../constants/strings'
import { formatDate, formatTemperature, timeFormat } from '../../utils/numberFormatter'

type Props = {
  forecast: HourlyWeatherForecast[]
  timezoneOffset: number
}

const Hourly: React.FC<Props> = ({ forecast, timezoneOffset }) => {
  const hourlyForecast = forecast.slice(0, 10)
  const temperatureData = hourlyForecast.map((hour) => ({
    x: hour.dt,
    y: hour.temp,
  }))
  const precipitationData = hourlyForecast.map((hour) => {
    const precipitationAmount = Math.max(hour.rain?.['1h'] ?? 0, hour.snow?.['1h'] ?? 0)
    return {
      x: hour.dt,
      y: precipitationAmount,
      label: precipitationAmount ? precipitationAmount + 'mm' : '',
    }
  })

  return (
    <section className="card relative h-52 p-0 overflow-hidden">
      <div className="absolute h-full w-full pt-2 pr-2 pb-0">
        <FlexibleXYPlot yDomain={[0, 7.5]} margin={{ left: 50 }}>
          <XAxis
            tickSizeInner={0}
            tickSizeOuter={0}
            tickValues={hourlyForecast.map((hour) => hour.dt)}
            tickFormat={(v) =>
              v === hourlyForecast[0].dt
                ? strings.TIME_NOW
                : formatDate(v + timezoneOffset, timeFormat)
            }
          />

          <VerticalBarSeries barWidth={0.8} data={precipitationData} color="#D7EFEC" />
          <LabelSeries
            data={precipitationData}
            labelAnchorX="middle"
            className="text-2xs font-semibold"
          />
          <XAxis
            top={0}
            hideLine
            tickSizeInner={0}
            tickSizeOuter={0}
            tickValues={hourlyForecast.map((hour) => hour.dt)}
            tickFormat={(v) => hourlyForecast.find((hour) => hour.dt === v)?.weather[0].main ?? ''}
          />
        </FlexibleXYPlot>
      </div>
      <div className="absolute h-full w-full pt-2 pr-2 pb-0">
        <FlexibleXYPlot yPadding={30} margin={{ left: 50 }}>
          <YAxis
            tickSizeInner={0}
            tickSizeOuter={4}
            className="text-xs"
            tickFormat={(v) => formatTemperature(v, 1)}
          />
          <LineSeries curve="curveNatural" data={temperatureData} color="red" />
        </FlexibleXYPlot>
      </div>
    </section>
  )
}

export default Hourly
