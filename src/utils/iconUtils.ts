import { ReactComponent as WiCloud } from '../icons/wi-cloud.svg'
import { ReactComponent as WiCloudy } from '../icons/wi-cloudy.svg'
import { ReactComponent as WiDayCloudy } from '../icons/wi-day-cloudy.svg'
import { ReactComponent as WiDayRain } from '../icons/wi-day-rain.svg'
import { ReactComponent as WiDayShowers } from '../icons/wi-day-showers.svg'
import { ReactComponent as WiDaySnow } from '../icons/wi-day-snow.svg'
import { ReactComponent as WiDaySunny } from '../icons/wi-day-sunny.svg'
import { ReactComponent as WiDayThunderstorm } from '../icons/wi-day-thunderstorm.svg'
import { ReactComponent as WiFog } from '../icons/wi-fog.svg'
import { ReactComponent as WiNightAltCloudy } from '../icons/wi-night-alt-cloudy.svg'
import { ReactComponent as WiNightAltRain } from '../icons/wi-night-alt-rain.svg'
import { ReactComponent as WiNightAltShowers } from '../icons/wi-night-alt-showers.svg'
import { ReactComponent as WiNightAltSnow } from '../icons/wi-night-alt-snow.svg'
import { ReactComponent as WiNightAltThunderstorm } from '../icons/wi-night-alt-thunderstorm.svg'
import { ReactComponent as WiNightClear } from '../icons/wi-night-clear.svg'

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
