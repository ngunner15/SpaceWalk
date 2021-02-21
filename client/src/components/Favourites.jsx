import React, {Fragment, useEffect, useState} from "react";
import axios from 'axios';

export default function Favourites() {

  const [favourites, setFavourites] = useState([]);

  const getFavourites = async () => {
    try {
      const response = await fetch(`http://localhost:3001/favourites/${window.location.pathname.split('/')[2]}`);
      const jsonData = await response.json();

      setFavourites(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getFavourites();
  }, []);

  function removeFavourite(favid) {
    axios
      .delete(`http://localhost:3001/favourites/${window.location.pathname.split('/')[2]}`, { data: { key: favid }})
      .then((result) => {
        getFavourites();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>Welcome to username's gallery</h1>
      {favourites.map(favourite => (
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4" id="fav-container">
        <div className="bg-white rounded shadow-sm">
          <img key={favourite.id} src={favourite.url} alt="main-photo" className="img-fluid card-img-top" />
          <div className="p-4">
            <h3>
              {favourite.title}
            </h3>
            <p className="medium text-muted mb-0">
              {favourite.description}
            </p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <button className="fav-remove-button btn btn-danger" type="button" onClick={() => removeFavourite(favourite.id)}>Remove</button>
              <div className="badge badge-info px-3 rounded-pill font-weight-normal">{favourite.posted_date.split('T')[0]}
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
       <div className="py-4 text-right"><a href="#" className="btn btn-light px-4 py-2">Go to top</a></div>
    </div>
  );
}