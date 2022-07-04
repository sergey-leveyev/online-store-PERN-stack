import { useLocation, NavLink } from "react-router-dom";
import { Button, Card, Container, Form } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Login" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Please enter your email"
          />
          <Form.Control
            className="mt-2"
            placeholder="Please enter your password"
          />
          <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                <NavLink end to={REGISTRATION_ROUTE}>
                  Sign up
                </NavLink>
              </div>
            ) : (
              <NavLink end to={LOGIN_ROUTE}>
                Sign in
              </NavLink>
            )}
            <Button variant={"outline-success"}>
              {isLogin ? "Login" : "Registration"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
