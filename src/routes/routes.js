import { Routes, Route } from 'react-router-dom';
import {HomePage} from '../views/index';

const RoutesPag = ()=>{
    return(
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="*" element={
                    <h1>ERROR 404 No se encuentra el documento</h1>
                }/>
            </Routes>
    );
};

export {
    RoutesPag
}
