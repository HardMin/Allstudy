import { Routes, Route } from "react-router-dom";

//Import Page
import { HomePage, ContentsPage } from "../views/index";

//Import Routes
const routes = require('./routes.json');
const Docs = routes.Routes.Docs;


const RoutesPag = () => {
    
    return (
        <Routes>
            {/* Home */}
            <Route path={routes.Routes.Home} element={<HomePage />} />;
            
            
            {/* ======================= Start Docs ========================== */}
            
            <Route 
                path={Docs.Home} 
                element={<ContentsPage course={Docs.Home} path={Docs.Home} />} />

            
            {/* *********************** Informatics ************************* */}
            
            <Route
                path={Docs.Informatics.Home}
                element={<ContentsPage course={Docs.Informatics.Home} path={Docs.Informatics.Home} />}
                />
            
            {/* *********************** Programming ************************* */}
            
            {/* ======================= End Docs ========================== */}
            
            
            <Route
                path="*"
                element={<h1>ERROR 404 No se encuentra el documento</h1>}
            />
        </Routes>
    );
};

export { RoutesPag as PageApp };
