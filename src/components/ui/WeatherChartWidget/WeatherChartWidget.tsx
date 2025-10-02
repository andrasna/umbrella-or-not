import { useSearchParams } from "react-router"
import { useForecast } from "../../../resources/useForecast"
import { LocationSearchParams } from "../../../constants/LocationSearchParams"
import { LineChart } from "@mui/x-charts/LineChart"
import styles from "./WeatherChartWidget.module.css"

function WeatherChartWidget() {
  const [searchParams] = useSearchParams()
  const latitude = searchParams.get(LocationSearchParams.Latitude)
  const longitude = searchParams.get(LocationSearchParams.Longitude)

  const { data, isLoading, error } = useForecast({ latitude, longitude })

  if (isLoading) return <div style={{ padding: 16 }}>Loading…</div>
  if (error) return <div style={{ padding: 16 }}>Failed to load forecast</div>

  const dailyForecast = data?.daily
  const temperatureUnit = data?.daily_units?.temperature_2m_max ?? "°C"

  if (!dailyForecast?.time?.length) return null

  const days = dailyForecast.time.map((isoDateString) =>
    new Date(isoDateString).toLocaleDateString("en-US", { weekday: "short" })
  )

  const maxTemperatures = dailyForecast.temperature_2m_max.map((temperature: number) =>
    Math.round(Number(temperature))
  )

  return (
    <section className={styles.container}>
      <header>
        <p className={styles.headerText}>7 day temperature trend</p>
      </header>

      <LineChart
        xAxis={[
          {
            scaleType: "point",
            data: days,
            tickLabelStyle: { fill: "#fff" },
          },
        ]}
        yAxis={[
          {
            tickLabelStyle: { fill: "#fff" },
          },
        ]}
        series={[
          { data: maxTemperatures, label: `Max Temperature (${temperatureUnit})`, color: "#fff" },
        ]}
        width={600}
        height={300}
      />
    </section>
  )
}

export { WeatherChartWidget }
