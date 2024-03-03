import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement(document.getElementById("root"));

function ImageModal({ isOpen = false, photo, onChange }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => onChange(false)}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      className={css.modal}
      overlayClassName={`${css.cover} ${isOpen ? css.coverOpen : ""}`}
    >
      <img src={photo.src} className={css.img} />
      {/* <p className={css.info}>{photo.user.location}</p> */}
      <p className={css.info}>{photo.description}</p>
    </ReactModal>
  );
}

export default ImageModal;
