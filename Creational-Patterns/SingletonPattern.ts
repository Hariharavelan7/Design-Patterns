interface WeatherData {
  temperature: number;
  humidity: number;
  description: string;
}

class WeatherAPI {
  public getWeatherData(city: string): WeatherData {
    return {
      temperature: 25,
      humidity: 50,
      description: "Sunny",
    };
  }
}

class WeatherService {
  private static instance: WeatherService;
  private weatherAPI: WeatherAPI;

  private constructor() {
    this.weatherAPI = new WeatherAPI();
  }

  public static getInstance(): WeatherService {
    if (!WeatherService.instance) {
      WeatherService.instance = new WeatherService();
    }
    return WeatherService.instance;
  }

  public getWeather(city: string): WeatherData {
    return this.weatherAPI.getWeatherData(city);
  }
}

const weatherService1 = WeatherService.getInstance();
const weatherService2 = WeatherService.getInstance();

console.log(weatherService1 === weatherService2); // Output: true

const weatherData = weatherService1.getWeather("Chennai");
console.log(weatherData);
