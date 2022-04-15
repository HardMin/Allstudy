import { Routes, Route } from "react-router-dom";


export const RoutesComputing = () => {
    return(
        
        <Route path='/concepts/computing' element={<h1>Estas en el Estudio de C++</h1>}/>
        
    )
}

export const RoutesProgramming = () => {
    return(
        
        <Route path='/concepts/programming' element={<h1>Estas en el Estudio de Programacion</h1>}/>
        
    )
}