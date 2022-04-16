
//Import Pakage
import React, {StrictMode} from "react";

//Import Components
import { StrongSubTitle, StrongTextImportant as Strong, StrongTextTitle } from "../../components";

//Import style
import '../../style/Docs.css';

const HomePage = ()=>{
    return(
        <StrictMode>
            <section className="container-md p-3">
                <div className="container-xl container-main-header">
                    <div className="main-header-img"></div>
                    <h2 className="main-header-title title-Allstudy">Allstudy</h2>
                </div>
                <hr />
                <section className="container-md p-2">
                    <h2>¿Qué es {<StrongSubTitle content="Allstudy"/>}?</h2>
                    <p className="container-md p-3 ">
                        <StrongTextTitle content={"Allstudy"}/> es un <Strong content={"'Enciclopedia'"}/>, 
                        donde se recopila toda información de algunos temas. Tales como, <Strong content={['matemática','física','informática','programación']}/> con la finalidad de guardar toda la información en este sitio. 
                    </p>
                </section>
                
            </section>
        </StrictMode>
    )
}

export {
    HomePage
}