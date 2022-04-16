//Import package
import React, {StrictMode} from "react";

//Import Pages
import { HomePage } from "./pages/Home";
import { Contents } from "./pages/Contents";

//Import Components
import { NavVertical } from "../components/index";

const ContentsPage = ({ course, path }) => {
  return (
    <StrictMode>
      <section>
        <nav className="nav-vertical">
          <NavVertical />
        </nav>
      </section>
      <Contents course={ course } path={ path } />
    </StrictMode>
  );
};

export { HomePage, ContentsPage };
