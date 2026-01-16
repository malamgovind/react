import { useEffect, useState } from "react";
import axios from "axios";

function Hooks02() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list")
      .then((res) => setPhotos(res.data));
  }, []);

  return (
    <>
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.download_url}
          width="200"
          alt={photo.author}
        />
      ))}
    </>
  );
}

export default Hooks02;
