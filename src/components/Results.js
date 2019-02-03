import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';


const Results = (props) => {

  const results = props.data;
  let photos;

  // When results are more than 0, display each photos
  if (results.length > 0) {
    photos = results.map(photo =>
      <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />);
  // When results are 0, display No Results message
  } else {
    photos = <NoResults />
  }
  return (
      <div className="photo-container">
        <h2>{props.text}</h2>
        <ul>
          {photos}
        </ul>
      </div>
  );
}

export default Results;
