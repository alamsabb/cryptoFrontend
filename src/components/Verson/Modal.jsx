import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function Example({ showModal, onClose }) {
  const navigate = useNavigate();
  const handleClose = () => {
    onClose();
  };
  const handleLogin = () => {
    navigate("/login");
    onClose();
  };
  const handleSignup = () => {
    navigate("/signup");
    onClose();
  };

  return (
    <>
      <div data-bs-theme="dark" className="bg-dark p-2">
        <Modal
          show={showModal}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered={true}
        >
          <div data-bs-theme="dark" className="bg-dark">
            <Modal.Header closeButton>
              <Modal.Title>Already a user?</Modal.Title>
            </Modal.Header>
          </div>
          <div data-bs-theme="dark" className="bg-dark">
            <Modal.Footer>
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
              <Button variant="primary" onClick={handleSignup}>
                Signup
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Example;
