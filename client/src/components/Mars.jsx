import axios from 'axios';

export default function Mars(props) {

  function getWeather() {
    axios.get(`/getMarsWeather`)
      .then(result => {
        const {
          sol_keys,
          validity_checks,
          ...solData
        } = result.data
        console.log(solData);
      })
    //           const temp = Object.entries(solData).map(([sol, data]) => {
    //             return {
    //               sol: sol,
    //               // maxTemp: data.AT.mx,
    //               // minTemp: data.AT.mn,
    //               // windSpeed: data.HWS.av,
    //               // windDirectionDegrees: data.WD.most_common.compass_degrees,
    //               // windDirectionCardinal: data.WD.most_common.compass_point,
    //               date: new Date(data.First_UTC)
    //             }
    //           })
  }

  getWeather();
  return (
    <main>
      <h1>I am Mars</h1>
      {/* <div>
        <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date)}</div>
        </div>

        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp)}°C
          </div>
          <div className="weather">
            {weather.weather[0].main}
          </div>
        </div>
      </div> */}
    </main>
  )
}