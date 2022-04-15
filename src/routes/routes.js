import { Routes, Route } from 'react-router-dom';

//Import Routes
import { RoutesComputing, RoutesProgramming } from './routesContent';

import {HomePage, ConceptsPage} from '../views/index';

const RoutesPag = ()=>{
    return(
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                
                <Route path='/concepts/' element={<ConceptsPage/>}/>
                <RoutesComputing/>
                <RoutesProgramming/>
                
                <Route path="*" element={
                    <h1>ERROR 404 No se encuentra el documento</h1>
                }/>

            </Routes>
    );
};

export {
    RoutesPag
}
