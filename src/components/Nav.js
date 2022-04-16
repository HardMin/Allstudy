import React, { StrictMode } from "react";
import { Link } from "react-router-dom";

//Import Components reactstrap
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
    NavLink,
    UncontrolledAccordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from "reactstrap";

//Import Styles
import "../style/NavBar.css";
import "../style/nav-vertical.css";

//Import Routes
const routes = require("../routes/routes.json");
const Docs = routes.Routes.Docs;

const NavBar = () => {
    return (
        <StrictMode>
            <Navbar color="dark" dark expand="md">
                <Link className="navbar-brand title-Allstudy" to="/">
                    Allstudy
                </Link>
                <NavbarToggler onClick={function noRefCheck() {}} />
                <Collapse navbar>
                    <form class="d-flex">
                        <input
                            class="form-control me-2 navbar-input"
                            type="search"
                            placeholder="Buscar"
                            aria-label="Search"
                        />
                        <button class="navbar-btn" type="submit">
                            Buscar
                        </button>
                    </form>
                </Collapse>
            </Navbar>
        </StrictMode>
    );
};

const NavVertical = ({ content }) => {
    return (
        <StrictMode>
            <Nav vertical className="container_nav-vertical">
                <NavItem>
                    <Link className="nav-link NavVertical-link" to="/">
                        Home
                    </Link>
                </NavItem>
                <NavItem>
                    <UncontrolledAccordion defaultOpen={["1", "2"]} flush>
                        <AccordionItem>
                            <AccordionHeader targetId="1">
                                Categoría
                            </AccordionHeader>
                            <AccordionBody accordionId="1">
                                <NavItem>
                                    <Link
                                        className="nav-link NavVertical-link"
                                        to={Docs.Programming.Home}
                                    >
                                        Programación
                                    </Link>
                                    <Link
                                        className="nav-link NavVertical-link"
                                        to={Docs.Informatics.Home}
                                    >
                                        Informática
                                    </Link>
                                </NavItem>
                            </AccordionBody>
                        </AccordionItem>
                    </UncontrolledAccordion>
                </NavItem>
            </Nav>
            <hr />

            <p>Informática</p>
            <Nav vertical>
                <NavItem>
                    <NavLink className="nav-link NavVertical-link" href="#">
                        Introducción
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link NavVertical-link" href="#">
                        Historía
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link NavVertical-link" href="#">
                        Orígenes de la informática
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link NavVertical-link" href="#">
                        Sistemas de tratamiento de la información
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link NavVertical-link" href="#">
                        Virus informáticos
                    </NavLink>
                </NavItem>
            </Nav>
            <hr />
            <p>Link based</p>
            <Nav vertical>
                <NavLink className="nav-link NavVertical-link" href="#">
                    Link
                </NavLink>
                <NavLink className="nav-link NavVertical-link" href="#">
                    Link
                </NavLink>
                <NavLink className="nav-link NavVertical-link" href="#">
                    Another Link
                </NavLink>
            </Nav>
        </StrictMode>
    );
};
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
        <DropdownMenu end>
            <DropdownItem>
                <Link
                    className="nav-link navbar-options"
                    to="/contents/computing/"
                >
                    Informatica
                </Link>
            </DropdownItem>
            <DropdownItem>
                <Link
                    className="nav-link navbar-options"
                    to="/contents/programming/"
                >
                    Programación
                </Link>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
                <Link
                    className="nav-link navbar-options"
                    to="/contents/programming/"
                >
                    Programación
                </Link>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
                <Link
                    className="nav-link navbar-options"
                    to="/contents/programming/"
                >
                    Programación
                </Link>
            </DropdownItem>
            <DropdownItem>
                <Link>Programación</Link>
            </DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
</Nav>;

export { NavBar, NavVertical };
