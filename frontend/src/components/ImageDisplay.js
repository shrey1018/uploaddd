import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageDisplay({ imageId }) {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/images/${imageId}`, {
          responseType: 'arraybuffer',
        });
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const url = URL.createObjectURL(blob);
        setImageData(url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [imageId]);

  return (
    <div>
      <h2>Image Display</h2>
      {imageData && <img src={imageData} alt="Uploaded" />}
    </div>
  );
}

export default ImageDisplay;
