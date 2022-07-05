import { Container, Col, Image, Row, Card, Button } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "iphone12",
    price: 5000,
    rating: 5,
    img: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  const description = [
    {
      id: 1,
      title: "bla bla",
      description: "bla bla bla bla bla bla bla bla bla bla",
    },
    {
      id: 2,
      title: "bla bla",
      description: "bla bla bla bla bla bla bla bla bla bla",
    },
    {
      id: 3,
      title: "bla bla",
      description: "bla bla bla bla bla bla bla bla bla bla",
    },
    {
      id: 4,
      title: "bla bla",
      description: "bla bla bla bla bla bla bla bla bla bla",
    },
    {
      id: 5,
      title: "bla bla",
      description: "bla bla bla bla bla bla bla bla bla bla",
    },
  ];
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className="w-50 mb-2">{device.name}</h2>
            <div
              className=" d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 250,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>{device.price} NIS</h3>
            <Button variant="outline-dark">Add to cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h2>Description</h2>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
