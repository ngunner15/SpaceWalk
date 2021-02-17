import React, {Fragment, useEffect, useState} from "react";

export default function Admin(props) {

  return (
    <Fragment>
      <h1>Welcome Admin, to the dashboard!</h1>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Planet</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {props.planetItems.map(planet => (
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