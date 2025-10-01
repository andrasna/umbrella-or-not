import { useQuery } from "@tanstack/react-query"
import type { Forecast } from "../types/forecast"
import { getForecast } from "../endpoints/forecast"

const forecastQueryKey = "ForecastQueryKey"

export function useForecast(latitude?: number, longitude?: number) {
  return useQuery<Forecast>({
    queryKey: [forecastQueryKey, latitude, longitude],
    queryFn: () => getForecast(latitude!, longitude!),
    enabled: typeof latitude === "number" && typeof longitude === "number",
  })
}
