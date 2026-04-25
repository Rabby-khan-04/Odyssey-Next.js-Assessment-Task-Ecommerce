import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";

const ProductImages = (props) => {
  const galleryRef = useRef(null);
  const images = props?.images.map((image) => ({
    original: image,
    thumbnail: image,
  }));
  return (
    <ImageGallery
      ref={galleryRef}
      items={images}
      onSlide={(index) => console.log("Slid to", index)}
      infinite={true}
      autoPlay={true}
      showNav={false}
      showFullscreenButton={false}
      showPlayButton={false}
      showBullets={false}
    />
  );
};

export default ProductImages;
