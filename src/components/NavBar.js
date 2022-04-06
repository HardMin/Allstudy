import React  from "react";
import {Link} from "react-router-dom";


export function NavMenuModule({types}){
    return(
        <React.StrictMode>
            <div>
            <nav>
            <ul>
                <Link to="les">hola</Link>
            </ul>
            </nav>
            </div>
        </React.StrictMode>
    )
}
