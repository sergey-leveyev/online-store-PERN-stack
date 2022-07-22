import { useNavigate } from "react-router-dom";
import { Col, Card, Image } from "react-bootstrap";
import star from "../assets/star.png";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  
  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + device.img}
        />
        <div className="text-black-50 mt-2 d-flex justify-content-between align-items-center">
          <div>Samsung....</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image className="mx-1" width={15} height={15} src={star} />
          </div>
        </div>
        <p>{device.name}</p>
      </Card>
    </Col>
  );
};

export default DeviceItem;
