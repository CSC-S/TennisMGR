/*eslint-disable*/
import React from "react";
import { Button, Modal} from "react-bootstrap";
import RootRoute from '../routes';
import ".././App.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          SOCIAL LOGIN
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <RootRoute />
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const SocialModal = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="light" onClick={() => setModalShow(true)}>
        SOCIAL
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default SocialModal;
