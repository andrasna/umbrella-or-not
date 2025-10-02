import { useSearchParams } from "react-router"
import { useForecast } from "../../../resources/useForecast"
import { LocationSearchParams } from "../../../constants/LocationSearchParams"
import { weatherCodeToText } from "../../../utils/weatherCodes"
import styles from "./WeatherWidget.module.css"

function WeatherWidget() {
  const [searchParams] = useSearchParams()
  const latitude = searchParams.get(LocationSearchParams.Latitude)
  const longitude = searchParams.get(LocationSearchParams.Longitude)

  const { data, isLoading, error } = useForecast({latitude, longitude})

  if (isLoading) return <div style={{ padding: 16 }}>Loading…</div>

  if (error) return <div style={{ padding: 16 }}>Failed to load forecast</div>

  if (!data) {
    return null
  }

  const code = data.current_weather?.weathercode
  const condition = weatherCodeToText(code)
  const temp = Math.round(Number(data.current_weather?.temperature))
  const unit = data.current_weather_units?.temperature

  return (
    <div className={styles.container}>

      <div className={styles.temperatureDisplay}>
        <span>{temp}</span>
        <span>{unit}</span>
      </div>

      <div>{condition}</div>
    </div>
  )
}

export { WeatherWidget }