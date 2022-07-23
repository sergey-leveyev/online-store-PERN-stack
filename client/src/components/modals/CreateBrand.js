import { useState } from "react";
import { Form, Modal, Button, Dropdown } from "react-bootstrap";

import { createBrand } from "../../http/deviceAPI";

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const addBrand = () => {
    createBrand({ name: value }).then((data) => {
      setValue("");
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown>
            <Form>
              <Form.Control
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="please add a brand"
              />
            </Form>
          </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addBrand}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
