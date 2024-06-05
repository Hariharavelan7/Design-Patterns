class Weather_Service {
  static instance: any;
  static getInstance() {
    throw new Error("Method not implemented.");
  }
  getTemperature(): number {
      return 25;
  }
}

interface WeatherProvider {
  getCurrentTemperature(): number;
}

class WeatherAdapter implements WeatherProvider {
  private weather_Service: Weather_Service;

  constructor(weather_Service: Weather_Service) {
      this.weather_Service = weather_Service;
  }

  getCurrentTemperature(): number {
      const celsiusTemperature = this.weather_Service.getTemperature();
      const fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
      return fahrenheitTemperature;
  }
}

const weather_Service = new Weather_Service();
const weatherAdapter = new WeatherAdapter(weather_Service);

console.log("Current temperature: " + weatherAdapter.getCurrentTemperature() + "°F");
