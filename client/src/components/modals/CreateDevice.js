import { useContext, useState } from "react";
import { Form, Modal, Button, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../../index";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

//test
  
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>Choose a type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>Choose a brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            placeholder="Please enter the device name"
            className="mt-3"
            type="text"
          />
          <Form.Control
            placeholder="Please enter the price name"
            className="mt-3"
            type="number"
          />
          <Form.Control
            placeholder="Please enter the price name"
            className="mt-3"
            type="file"
          />
          <hr />
          <Button className="mb-3" variant="outline-dark" onClick={addInfo}>
            Add new device description
          </Button>
          {info.map((i) => (
            <Row className="mb-2" key={i.number}>
              <Col className="w-100 mb-1" md={4}>
                <Form.Control placeholder="Please enter title for the description" />
              </Col>
              <Col className="w-100 mb-2" md={4}>
                <Form.Control
                  className="p-4"
                  placeholder="Please enter the description"
                />
              </Col>
              <Col md={4} onClick={() => removeInfo(i.number)}>
                <Button variant="outline-danger">Delete</Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success">Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
