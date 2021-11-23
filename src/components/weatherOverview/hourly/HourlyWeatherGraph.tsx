import React, { useMemo } from 'react'
import { FlexibleXYPlot, LabelSeries, LineSeries, VerticalBarSeries, XAxis, YAxis } from 'react-vis'
import 'react-vis/dist/style.css'
import { HourlyWeatherForecast } from 'ts-open-weather-map'
import { strings } from '../../../constants/strings'
import { getHourlyGraphData } from '../../../utils/graphDataTransforms'
import { formatDate, formatTemperature, timeFormat } from '../../../utils/numberFormatter'

type Props = {
  forecast: HourlyWeatherForecast[]
  timezoneOffset: number
  graphMargins: { left: number; right: number }
  className: string
}

const Hourly: React.FC<Props> = ({ forecast, timezoneOffset, graphMargins, className }) => {
  const graphData = useMemo(() => getHourlyGraphData(forecast), [forecast])

  return (
    <div className={className}>
      <FlexibleXYPlot
        yDomain={[graphData.temperatureRange.min, graphData.temperatureRange.max + 1]}
        margin={{ left: graphMargins.left, right: graphMargins.right }}
      >
        <XAxis
          tickSizeInner={0}
          tickSizeOuter={0}
          tickValues={forecast.map((hour) => hour.dt)}
          tickFormat={(v) =>
            v === forecast[0].dt ? strings.TIME_NOW : formatDate(v + timezoneOffset, timeFormat)
          }
        />
        <YAxis tickSizeInner={0} tickSizeOuter={4} tickFormat={(v) => formatTemperature(v, 1)} />

        <VerticalBarSeries barWidth={0.8} data={graphData.precipitationData} color="#D7EFEC" />
        <LineSeries curve="curveNatural" data={graphData.temperatureData} color="red" />
        <LabelSeries
          data={graphData.precipitationData}
          labelAnchorX="middle"
          className="text-2xs font-semibold"
        />
      </FlexibleXYPlot>
    </div>
  )
}

export default Hourly
