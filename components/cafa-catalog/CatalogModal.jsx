import React from "react";
import Modal from 'react-modal';
import CatalogCarousel from "./CatalogCarousel";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function CatalogModal({itemIds}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="border border-current px-4 py-2 text focus:outline-none" onClick={openModal}>See Catalogue</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Catalog Carousel"
      >
        <div>
          <CatalogCarousel itemIds={itemIds} isLooped={false}/>
        </div>
      </Modal>
    </div>
  );
}