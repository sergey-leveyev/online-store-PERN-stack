import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { Context } from "../index";

const NavBar = observer(() => {
  const { user } = useContext(Context);

  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={SHOP_ROUTE}>Miser</Navbar.Brand>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Admin panel
            </Button>

            <Button
              variant={"outline-light"}
              className="mx-1"
              onClick={() => logOut()}
            >
              Logout
            </Button>
          </Nav>
        ) : (
          <Button
            variant={"outline-light"}
            onClick={() => navigate(LOGIN_ROUTE)}
          >
            Login
          </Button>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
