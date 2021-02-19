import React, { Fragment, useState } from "react";

const EditPlanet = ({ planet, setPlanets }) => {
  const [description, setDescription] = useState(planet.description);

  const updateDescription = async e => {
    e.preventDefault();
    console.log(description)
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:3001/planets/${planet.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      )
      .then(async () => {
        const res = await fetch("http://localhost:3001/planets");
        const jsonData = await res.json();
        setPlanets(jsonData)
      })
      // window.location = "/admin";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${planet.id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        className="modal"
        id={`id${planet.id}`}
        onClick={() => setDescription(planet.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Planet</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(planet.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={updateDescription}
              >
                Edit
              </button>

              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(planet.description)}
              >
                Close
              </button>

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditPlanet;