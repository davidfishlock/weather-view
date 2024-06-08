import WiCloud from '../icons/wi-cloud.svg?react'
import WiCloudy from '../icons/wi-cloudy.svg?react'
import WiDayCloudy from '../icons/wi-day-cloudy.svg?react'
import WiDayRain from '../icons/wi-day-rain.svg?react'
import WiDayShowers from '../icons/wi-day-showers.svg?react'
import WiDaySnow from '../icons/wi-day-snow.svg?react'
import WiDaySunny from '../icons/wi-day-sunny.svg?react'
import WiDayThunderstorm from '../icons/wi-day-thunderstorm.svg?react'
import WiFog from '../icons/wi-fog.svg?react'
import WiNightAltCloudy from '../icons/wi-night-alt-cloudy.svg?react'
import WiNightAltRain from '../icons/wi-night-alt-rain.svg?react'
import WiNightAltShowers from '../icons/wi-night-alt-showers.svg?react'
import WiNightAltSnow from '../icons/wi-night-alt-snow.svg?react'
import WiNightAltThunderstorm from '../icons/wi-night-alt-thunderstorm.svg?react'
import WiNightClear from '../icons/wi-night-clear.svg?react'

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

export function getWeatherIcon(iconCode: string) {
  return iconsMap.get(iconCode)
}
