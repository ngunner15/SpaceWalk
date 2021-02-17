import React, {Fragment, useEffect, useState} from "react";

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
    <Fragment>
      <h1>Welcome Admin, to the dashboard!</h1>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
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
                {/* <EditPlanet planet={planet} /> */}
                <button
                  className="btn btn-danger"
                  // onClick={() => deletePlanet(planet.planet_id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}