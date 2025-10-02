import { useSearchParams } from "react-router"
import { useForecast } from "../../../resources/useForecast"
import { LocationSearchParams } from "../../../constants/LocationSearchParams"
import { weatherCodeToText, weatherCodeToIcon } from "../../../utils/weatherCodes"
import styles from "./WeatherForecastWidget.module.css"

type WeatherForecastListItemProps = {
  isoDateString: string
  weatherCode: number | null | undefined
  precipitationProbability: number
  minimumTemperature: number
  maximumTemperature: number
  temperatureUnit: string
}

function WeatherForecastListItem({
  isoDateString,
  weatherCode,
  precipitationProbability,
  minimumTemperature,
  maximumTemperature,
  temperatureUnit,
}: WeatherForecastListItemProps) {
  const weatherIcon = weatherCodeToIcon(weatherCode)
  const weatherDescription = weatherCodeToText(weatherCode)
  const weekdayName = new Date(isoDateString).toLocaleDateString("en-US", { weekday: "long" })

  return (
    <li className={styles.item} title={weatherDescription}>
      <span>{weekdayName}</span>
      <span className={styles.weatherIcon} aria-hidden="true">{weatherIcon}</span>
      <span className={styles.precipitationProbability}>{precipitationProbability}%</span>
      <span className={styles.temperatureRange}>
        <span>{minimumTemperature}{temperatureUnit}</span>
        /
        <span>{maximumTemperature}{temperatureUnit}</span>
      </span>
    </li>
  )
}

function WeatherForecastWidget() {
  const [searchParams] = useSearchParams()
  const latitude = searchParams.get(LocationSearchParams.Latitude)
  const longitude = searchParams.get(LocationSearchParams.Longitude)

  const { data, isLoading, error } = useForecast({ latitude, longitude })

  if (isLoading) return <div style={{ padding: 16 }}>Loading…</div>

  if (error) return <div style={{ padding: 16 }}>Failed to load forecast</div>

  const dailyForecast = data?.daily
  const temperatureUnit = data?.daily_units?.temperature_2m_max ?? "°C"

  if (!dailyForecast?.time?.length) return null

  return (
    <section>
      <header>
        <p className={styles.headerText}>7 day weather forecast</p>
      </header>

      <ul className={styles.list}>
        {dailyForecast.time.map((isoDateString, dayIndex) => (
          <WeatherForecastListItem
            key={isoDateString}
            isoDateString={isoDateString}
            weatherCode={dailyForecast.weathercode?.[dayIndex]}
            precipitationProbability={dailyForecast.precipitation_probability_max?.[dayIndex] ?? 0}
            minimumTemperature={Math.round(Number(dailyForecast.temperature_2m_min?.[dayIndex]))}
            maximumTemperature={Math.round(Number(dailyForecast.temperature_2m_max?.[dayIndex]))}
            temperatureUnit={temperatureUnit}
          />
        ))}
      </ul>
    </section>
  )
}


export { WeatherForecastWidget }
