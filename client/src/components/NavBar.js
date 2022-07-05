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
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Logout
            </Button>
          </Nav>
        ) : (
          <Button
            variant={"outline-light"}
            onClick={() => user.setIsAuth(true)}
          >
            Login
          </Button>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
