import { Routes, Route } from 'react-router-dom';
import Views from '../views/index';
const Home = Views.Home();

export function RoutesPag(){
    return(
            <Routes>
                <Route path="/" element={Home}/>
                <Route path="*" element={
                    <h1>ERROR 404 No se encuentra el documento</h1>
                }/>
            </Routes>
    );
};
