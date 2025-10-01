export type Forecast = {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  current_weather_units?: {
    time: string
    interval: string
    temperature: string
    windspeed: string
    winddirection: string
    is_day: string
    weathercode: string
  }
  current_weather?: {
    time: string
    interval: number
    temperature: number
    windspeed: number
    winddirection: number
    is_day: 0 | 1
    weathercode: number
  }
  daily_units?: {
    time: string
    weathercode: string
    temperature_2m_max: string
    temperature_2m_min: string
    precipitation_probability_max: string
  }
  daily?: {
    time: string[]
    weathercode: number[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    precipitation_probability_max?: number[]
  }
}
