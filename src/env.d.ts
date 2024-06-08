/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_WEATHER_API_KEY: string
  readonly VITE_NEWS_API_KEY: string
  readonly VITE_MAP_TILES_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
