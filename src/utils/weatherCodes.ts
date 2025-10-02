const weatherCodeMap = {
  0: { text: "Clear", icon: "☀️" },
  1: { text: "Mainly clear", icon: "🌤️" },
  2: { text: "Partly cloudy", icon: "⛅" },
  3: { text: "Overcast", icon: "☁️" },
  45: { text: "Fog", icon: "🌫️" },
  48: { text: "Depositing rime fog", icon: "🌫️" },
  51: { text: "Light drizzle", icon: "🌦️" },
  53: { text: "Moderate drizzle", icon: "🌦️" },
  55: { text: "Dense drizzle", icon: "🌧️" },
  56: { text: "Light freezing drizzle", icon: "🌨️" },
  57: { text: "Dense freezing drizzle", icon: "🌨️" },
  61: { text: "Slight rain", icon: "🌧️" },
  63: { text: "Moderate rain", icon: "🌧️" },
  65: { text: "Heavy rain", icon: "🌧️" },
  66: { text: "Light freezing rain", icon: "🌨️" },
  67: { text: "Heavy freezing rain", icon: "🌨️" },
  71: { text: "Slight snow", icon: "🌨️" },
  73: { text: "Moderate snow", icon: "🌨️" },
  75: { text: "Heavy snow", icon: "❄️" },
  77: { text: "Snow grains", icon: "❄️" },
  80: { text: "Slight rain showers", icon: "🌦️" },
  81: { text: "Moderate rain showers", icon: "🌦️" },
  82: { text: "Violent rain showers", icon: "⛈️" },
  85: { text: "Slight snow showers", icon: "🌨️" },
  86: { text: "Heavy snow showers", icon: "❄️" },
  95: { text: "Thunderstorm", icon: "⛈️" },
  96: { text: "Thunderstorm with slight hail", icon: "⛈️" },
  99: { text: "Thunderstorm with heavy hail", icon: "⛈️" },
} as const

type WeatherCode = keyof typeof weatherCodeMap

function weatherCodeToText(code: unknown): string {
  return typeof code === "number" && code in weatherCodeMap
    ? weatherCodeMap[code as WeatherCode].text
    : "Unknown"
}

function weatherCodeToIcon(code: unknown): string {
  return typeof code === "number" && code in weatherCodeMap
    ? weatherCodeMap[code as WeatherCode].icon
    : "❓"
}

export { weatherCodeToText, weatherCodeToIcon }
export type { WeatherCode }
