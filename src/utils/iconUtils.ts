import { IconType } from 'react-icons'
import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDayRain,
  WiDayShowers,
  WiDaySnow,
  WiDaySunny,
  WiDayThunderstorm,
  WiFog,
  WiNightAltCloudy,
  WiNightAltRain,
  WiNightAltShowers,
  WiNightAltSnow,
  WiNightAltThunderstorm,
  WiNightClear,
} from 'react-icons/wi'

const iconsMap = new Map([
  ['01d', WiDaySunny],
  ['01n', WiNightClear],
  ['02d', WiDayCloudy],
  ['02n', WiNightAltCloudy],
  ['03d', WiCloud],
  ['03n', WiCloud],
  ['04d', WiCloudy],
  ['04n', WiCloudy],
  ['09d', WiDayShowers],
  ['09n', WiNightAltShowers],
  ['10d', WiDayRain],
  ['10n', WiNightAltRain],
  ['11d', WiDayThunderstorm],
  ['11n', WiNightAltThunderstorm],
  ['13d', WiDaySnow],
  ['13n', WiNightAltSnow],
  ['50d', WiFog],
  ['50n', WiFog],
])

export function getWeatherIcon(iconCode: string): IconType | undefined {
  return iconsMap.get(iconCode)
}
