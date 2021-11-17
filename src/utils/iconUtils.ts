import { BASE_ICON_PATH } from '../constants/icons'

export function getWeatherIconPath(iconCode: string): string {
  return `${BASE_ICON_PATH}${iconCode}@4x.png`
}
