import React, {Fragment, useEffect, useState} from "react";
import axios from 'axios';
import '../PhotoGallery.css';
import 'tachyons';

export default function PhotoGallery(props) {
  const [name, setName] = useState("");
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    try {
      const response = await fetch("http://localhost:3001/photos");
      const jsonData = await response.json();

      setPhotos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  function addFav(favid) {
    axios
      .post("http://localhost:3001/favourites",  {params : favid })
      .then(() => {
        // do nothing in browser console
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/photossearch/?title=${name}`);

      const parseResponse = await response.json();

      console.log(parseResponse)
      setPhotos(parseResponse);
    } catch (err) {
      console.error(err.message);
    }
  };

  // showing in chrome console
  // console.log(JSON.stringify(photos));

  return (
    <div className="page-back">
      <h1 className="title">Welcome to the photo gallery</h1>

      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          placeholder="Enter title ..."
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className="btn btn-success">Submit</button>
      </form>

      {photos.map(photo => (
      <div className="tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-4 col-xl-3 col-lg-4 col-md-6 mb-4" id="fav-container">
        <div className="bg-white rounded shadow-sm">
          <img key={photo.id} src={photo.url} alt="main-photo" className="img-fluid card-img-top" />
          <div className="p-4">
            <h3>
              {photo.title}
            </h3>
            <p className="medium text-muted mb-0">
              {photo.description}
            </p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <button className="btn btn-primary" type="button" onClick={() => addFav(photo.id)}>Favourite</button>
              <div className="badge badge-danger px-3 rounded-pill font-weight-normal">{photo.posted_date.split('T')[0]}
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
       <div className="py-4 text-right"><a href="#" className="btn bg-washed-yellow px-4 py-2">Go to top</a></div>
    </div>
  );
}