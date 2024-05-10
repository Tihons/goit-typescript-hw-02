import css from "./ImageModal.module.css";
import { Image } from "../../types";
import Modal from 'react-modal'
interface ImageModalProps {
    closeModal: () => void;
    modalIsOpen: boolean;
    modalImage: Image | null;
  }
  Modal.setAppElement("#root");
  const ImageModal: React.FC<ImageModalProps> = ({ closeModal, modalIsOpen, modalImage }) => {
      return (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
       
          contentLabel="Example Modal"
        >
          {modalImage && (
            <div className={css.modalContainer}>
              <div className={css.imgContainer}>
                <img
                  className={css.modalImg}
                  src={modalImage.urls.regular}
                  alt={modalImage.slug}
                />
              </div>
              <div className={css.descContainer}>
                <p className={css.imgDesc}>{modalImage.alt_description}</p>
                <p className={css.imgLikes}>👍: {modalImage.likes}</p>
              </div>
            </div>
          )}
        </Modal>
      );
    };
    export default ImageModal;

