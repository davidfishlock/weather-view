import React, { useMemo, useState } from 'react'
import {
  FlexibleXYPlot,
  Hint,
  LabelSeries,
  LineSeries,
  LineSeriesPoint,
  VerticalBarSeries,
  XAxis,
  YAxis,
} from 'react-vis'
import 'react-vis/dist/style.css'
import { HourlyWeatherForecast } from 'ts-open-weather-map'
import { strings } from '../../../constants/strings'
import { getHourlyGraphData } from '../../../utils/graphDataTransforms'
import { formatDate, formatTemperature, hourFormat } from '../../../utils/numberFormatter'
import HourlyGraphOverlay from './HourlyGraphOverlay'

type Props = {
  forecast: HourlyWeatherForecast[]
  timezoneOffset: number
  graphMargins: { left: number; right: number }
  className: string
}

const Hourly: React.FC<Props> = ({ forecast, timezoneOffset, graphMargins, className }) => {
  const [activePoint, setActivePoint] = useState<LineSeriesPoint>()
  const graphData = useMemo(() => getHourlyGraphData(forecast), [forecast])
  const activeForecast = forecast.find((hour) => hour.dt === activePoint?.x)

  return (
    <div className={className}>
      <FlexibleXYPlot
        onTouchCancel={() => setActivePoint(undefined)}
        onTouchEnd={() => setActivePoint(undefined)}
        onMouseLeave={() => setActivePoint(undefined)}
        yDomain={[graphData.temperatureRange.min - 1, graphData.temperatureRange.max + 1]}
        margin={{ left: graphMargins.left, right: graphMargins.right, bottom: 34 }}
      >
        <VerticalBarSeries
          barWidth={0.8}
          data={graphData.precipitationData}
          className="graph-bar"
        />
        <LineSeries
          onNearestX={setActivePoint}
          curve="curveNatural"
          data={graphData.temperatureData}
          className="graph-line"
        />

        <XAxis
          tickSizeInner={0}
          tickSizeOuter={0}
          className="strong-text"
          tickValues={forecast.map((hour) => hour.dt)}
          tickFormat={(v) =>
            v === forecast[0].dt
              ? strings.TIME_NOW
              : formatDate(v + timezoneOffset, hourFormat).replace(/\s/g, '')
          }
        />
        <YAxis
          className="strong-text"
          tickSizeInner={0}
          tickSizeOuter={4}
          tickFormat={(v) => formatTemperature(v, 1)}
        />

        <LabelSeries
          data={graphData.precipitationData}
          labelAnchorX="middle"
          className="graph-label"
        />
        {!!activeForecast && (
          <Hint value={activePoint} align={{ vertical: 'bottom', horizontal: 'right' }}>
            <HourlyGraphOverlay
              className="transform -translate-x-1/2 translate-y-2"
              forecast={activeForecast}
            />
          </Hint>
        )}
      </FlexibleXYPlot>
    </div>
  )
}

export default Hourly
