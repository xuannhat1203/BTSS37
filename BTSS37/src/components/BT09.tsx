import { useState, useCallback } from "react";
import ImageDetail from "./ImageDetail";
export default function BT09() {
  const [images, setImages] = useState<string[]>([
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=road-car-vehicle-170811.jpg&fm=jpg",
    "https://www.freepngimg.com/thumb/audi/24-audi-png-car-image.png",
    "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?cs=srgb&dl=lights-car-vehicle-244206.jpg&fm=jpg",
  ]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = useCallback((image: string) => {
    setSelectedImage(image);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {images.map((image, index) => (
          <li key={index} style={{ display: "inline-block", margin: "10px" }}>
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              style={{ cursor: "pointer", width: "100px", height: "100px" }}
              onClick={() => handleImageClick(image)}
            />
          </li>
        ))}
      </ul>
      <ImageDetail image={selectedImage} onClose={handleCloseModal} />
    </div>
  );
}
