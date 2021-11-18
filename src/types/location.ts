import { City } from 'ts-open-weather-map'

export type Location = City | { lat: number; lon: number; name: string }
