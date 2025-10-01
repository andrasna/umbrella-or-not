import { useSearchParams } from "react-router"
import { useForecast } from "../../../resources/useForecast"
import { LocationSearchParams } from "../../../constants/LocationSearchParams"
import { weatherCodeToText } from "../../../utils/weatherCodes"

function WeatherPanel() {
  const [searchParams] = useSearchParams()
  const LatitudeParam = Number(searchParams.get(LocationSearchParams.Latitude))
  const LongitudeParam = Number(searchParams.get(LocationSearchParams.Longitude))

  const { data, isLoading, error } = useForecast(LatitudeParam, LongitudeParam)

  if (isLoading) return <div style={{ padding: 16 }}>Loading…</div>
  if (error) return <div style={{ padding: 16 }}>Failed to load forecast</div>

  const code = data?.current_weather?.weathercode
  const condition = weatherCodeToText(code)
  const temp = Math.round(Number(data?.current_weather?.temperature))
  const unit = data?.current_weather_units?.temperature

  return (
    <div>
      <div>
        {temp} {unit}
      </div>

      <div>{condition}</div>
    </div>
  )
}

export { WeatherPanel }