import React from 'react'
import { FiAlertTriangle } from 'react-icons/fi'
import { WeatherAlert } from 'ts-open-weather-map'
import { strings } from '../../constants/strings'
import { testIds } from '../../constants/testIds'
import { formatDate, shortDateTimeFormat } from '../../utils/numberFormatter'

type Props = {
  alert: WeatherAlert
}

const Alert: React.FC<Props> = ({ alert }) => (
  <section className="card mt-4 bg-red-500 text-white flex flex-row p-0">
    <FiAlertTriangle className="flex-grow-0 h-12 w-12 ml-4 mt-3" />
    <div className="flex-grow p-4">
      <p data-testid={testIds.ALERT_DESCRIPTION} className="whitespace-pre-wrap">
        {alert.description}
      </p>
      <p className="text-sm mt-2">
        {strings.ALERT_VALID_FROM} {formatDate(alert.start, shortDateTimeFormat)} -{' '}
        {formatDate(alert.end, shortDateTimeFormat)}
      </p>
      <p className="text-sm mt-2">
        {strings.ALERT_PROVIDER} {alert.senderName}
      </p>
    </div>
  </section>
)

export default Alert
