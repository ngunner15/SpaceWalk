import React, {Fragment, useEffect, useState} from "react";
import EditPlanet from "./EditPlanet"
import '../Admin.scss'
import Navbar from './Navbar';

export default function Admin(props) {

  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    try {
      const response = await fetch("http://localhost:3001/planets");
      const jsonData = await response.json();

      setPlanets(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPlanets();
  }, []);

  // showing in chrome console
  // console.log(JSON.stringify(planets));

  return (
    <div className="App">
      <Navbar />
      <Fragment>
      <h1>Welcome Admin, to the dashboard!</h1>
      {" "}
      <table className="table mt-5 text-center responsive-table">
        <thead className="table-header">
          <tr>
            <th>Planet</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {planets.map(planet => (
            <tr key={planet.id}>
              <td>{planet.name}</td>
              <td>{planet.description}</td>
              <td>
                <EditPlanet setPlanets={setPlanets} planet={planet} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </Fragment>
    </div>
  );
}