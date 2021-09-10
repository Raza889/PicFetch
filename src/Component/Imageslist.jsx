import React from 'react';
import './images.css';
import ImageCard from './ImageCard';

const ImagesList = props => {
  const images = props.images.map((image) => {
    console.log("props images", image)
    return <ImageCard image={image} key={image.id} />
  });
  return (
    <div className='images--list'>
      {images}
    </div>
  )
}

export default ImagesList;