import { LocationAutcomplete } from "../../ui/LocationAutocomplete/LocationAutocomplete";
import { WeatherChartWidget } from "../../ui/WeatherChartWidget/WeatherChartWidget";
import { WeatherForecastWidget } from "../../ui/WeatherForecastWidget/WeatherForecastWidget";
import { WeatherWidget } from "../../ui/WeatherWidget/WeatherWidget";
import styles from "./Home.module.css"

function Home() {
  return (
    <main className={styles.container}>
      <section>
        <LocationAutcomplete />
        <WeatherWidget />
      </section>
      
      <section className={styles.dataWidgets}>
        <WeatherForecastWidget />
        <WeatherChartWidget />
      </section>
    </main>
  )
}

export { Home }