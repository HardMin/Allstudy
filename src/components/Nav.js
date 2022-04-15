import React, {StrictMode} from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  DropdownToggle,
  Input,
  NavLink
} from "reactstrap";
import "../style/NavBar.css";
import "../style/nav-vertical.css";

const NavBar = () => {
  return (
    <StrictMode>
      <Navbar color="dark" dark expand="md">
        <Link className="navbar-brand" to="/">
          Allstudy
        </Link>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto d-flex navbar-links" navbar>
            <NavItem>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle className="nav-link" caret nav>
                Categoría
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Option 3</DropdownItem>
                <DropdownItem>Option 4</DropdownItem>
                <DropdownItem>Option 5</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Option 6</DropdownItem>
                <DropdownItem>Option 7</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <form class="d-flex">
            <input
              class="form-control me-2 navbar-input"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button class="btn btn-outline-success navbar-btn" type="submit">
              Buscar
            </button>
          </form>
        </Collapse>
      </Navbar>
    </StrictMode>
  );
};

const NavVertical = ({content}) => {
  return (
    <StrictMode>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
      <p>Link based</p>
      <Nav vertical>
        <NavLink href="#">Link</NavLink> 
        <NavLink href="#">Link</NavLink>{" "}
        <NavLink href="#">Another Link</NavLink>{" "}
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </Nav>
    </StrictMode>
  );
};

export { 
    NavBar,
    NavVertical
};
