import React from "react";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function Example({ isOpen, toggle }) {
 // const [modalOpen, setModalOpen] = React.useState(false);
 
  return (
    <>
      <Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        Launch demo modal
      </Button>
      <Modal toggle={toggle} isOpen={isOpen}>
        <div className=" modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Fill out the form to request a Pitch Deck
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={toggle}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>...</ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={toggle}
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Example;