import { useState } from "react";


function Movie(props){

    return(
        <>
             <div className="card" style={{width: "15%",background:"black",height:'28rem'}}>
                <img src={props.imgsrc} className="card-img-top"style={{height:'60%'}} alt="..."></img>
                <div className="card-body text-light">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.rating}</p>
                    <a href="#" className="btn btn-primary">Go Watch</a>
                </div>
             </div>  

        
        </>

    );
}
export default Movie;