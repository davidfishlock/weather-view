import React from 'react'
import { FiAlertTriangle } from 'react-icons/fi'
import { WeatherAlert } from 'ts-open-weather-map'
import { strings } from '../../constants/strings'
import { testIds } from '../../constants/testIds'
import { formatDate, shortDateTimeFormat } from '../../utils/numberFormatter'

type Props = {
  alert: WeatherAlert
}

const AlertItem: React.FC<Props> = ({ alert }) => (
  <div className="mb-4">
    <div className="flex flex-row items-center mb-2">
      <FiAlertTriangle className="icon-sm flex-grow-0 mr-2" />
      <h3 className="text-lg font-semibold">{alert.event}</h3>
    </div>
    <p className="text-sm mt-2">
      {strings.ALERT_VALID_FROM} {formatDate(alert.start, shortDateTimeFormat)} -{' '}
      {formatDate(alert.end, shortDateTimeFormat)}
    </p>
    <p className="text-sm mb-2">
      {strings.ALERT_PROVIDER} {alert.senderName}
    </p>
    <p data-testid={testIds.ALERT_DESCRIPTION} className="whitespace-pre-wrap">
      {alert.description}
    </p>
  </div>
)

export default AlertItem
