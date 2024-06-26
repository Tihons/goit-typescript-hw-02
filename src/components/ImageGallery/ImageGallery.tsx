import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../../types";

interface ImageCardProps {
  images: Image[];
  openModal: (id: string) => void;
}

const ImageGallery: React.FC<ImageCardProps> = ({ images, openModal }) => {
  return (
    <ul className={css.imagesList}>
      {Array.isArray(images) &&
        images.map((image) => {
          return (
            <li className={css.imageItem} key={image.id}>
              <ImageCard image={image} openModal={openModal} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;