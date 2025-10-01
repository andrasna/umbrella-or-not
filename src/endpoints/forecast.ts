import axios from "axios"
import type { Forecast } from "../types/forecast"

export async function getForecast(latitude: number, longitude: number): Promise<Forecast> {
  const { data } = await axios.get(`${import.meta.env.VITE_METEO_API_URL}/forecast`, {
    params: {
      latitude,
      longitude,
      current_weather: true,
      daily: "weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max",
      forecast_days: 7,
      timezone: "auto",
    },
    timeout: 10000,
  })
  return data
}
