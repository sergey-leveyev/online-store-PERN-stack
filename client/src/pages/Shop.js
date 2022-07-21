import { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";
import { observer } from "mobx-react-lite";
import { Context } from "../index.js";
import { fetchBrands, fetchDevice, fetchTypes } from "../http/deviceAPI";

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevice().then((data) => device.setDevices(data.rows));
  }, []);

  return (
    <Container>
      <Row>
        <Col className="mt-3" md={3}>
          <TypeBar />
        </Col>
        <Col md={9} className="mt-3">
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
