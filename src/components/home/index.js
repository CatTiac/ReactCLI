import { useState } from "react";
import { PhotoContainer } from "../photoContainer";

//Below - square brackets in useState for array
export const Home = () => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      setPhotos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button onClick={fetchPhotos}>Grab photos</button>
      {photos.map((item, index) => (
        <PhotoContainer photo={item} />
      ))}
    </>
  );
};
