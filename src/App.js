//Import package
import { BrowserRouter } from "react-router-dom";

//Import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";

//Import Components
import { NavVertical } from "./components/Nav";

//Import Layouts
import { Header, Footer } from "./layout/index";

//Import Pag
import { PagApp } from "./routes/index";

export const App = ()=>{
    return (
        <BrowserRouter>
            <Header/>
            <div className="container-content">
                <section>
                    <nav className="nav-vertical">
                        <NavVertical/>
                    </nav>
                </section>
                <PagApp/>
            </div>
            <Footer/>
        </BrowserRouter>
    );
};