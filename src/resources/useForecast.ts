import { useQuery } from "@tanstack/react-query"
import type { Forecast } from "../types/forecast"
import { getForecast } from "../endpoints/forecast"

const forecastQueryKey = "ForecastQueryKey"

export type CoordinateValue = number | string | null

export type Coordinates = {
  latitude: CoordinateValue
  longitude: CoordinateValue
}

const hasValidCoordinates = ({ latitude, longitude }: Coordinates): boolean => {
  return (
    latitude !== null &&
    longitude !== null &&
    latitude !== "" &&
    longitude !== ""
  )
}

function useForecast({ latitude, longitude }: Coordinates) {
  return useQuery<Forecast>({
    queryKey: [forecastQueryKey, latitude, longitude],
    queryFn: () => getForecast(Number(latitude), Number(longitude)),
    enabled: hasValidCoordinates({ latitude, longitude }),
  })
}

export { useForecast }