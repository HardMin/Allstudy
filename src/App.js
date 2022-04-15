//Import package
import { BrowserRouter } from "react-router-dom";

//Import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";

//Import Layouts
import { Header, Footer } from "./layout/index";

//Import Pag
import { PagApp } from "./routes/index";

export const App = ()=>{
    return (
        <BrowserRouter>
            <Header/>
            <div className="container-content">
                <PagApp/>
            </div>
            <Footer/>
        </BrowserRouter>
    );
};