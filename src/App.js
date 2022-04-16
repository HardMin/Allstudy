//Import package
import { BrowserRouter } from "react-router-dom";

//Import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";
//Import Fonts
import "./style/font-face.css";

//Import Layouts
import { Header, Footer } from "./layout/index";

//Import Pag
import { PageApp } from "./routes/index";

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="container-content">
                <PageApp />
            </div>
            <Footer />
        </BrowserRouter>
    );
};
