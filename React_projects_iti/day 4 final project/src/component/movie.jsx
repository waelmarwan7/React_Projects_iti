import { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/cards.css'
function Movie(props){

    return(
        <>
             <div className="card cardinfo" style={{width: '19%',background:"DarkSlateGray",height:'25rem',borderRadius:'0.8rem'}}>
                <img src={'https://image.tmdb.org/t/p/w500/'+props.poster_path} className="card-img-top"style={{height:'65%',width:'100%'}} ></img>
                <div className="card-body text-light">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.vote_average}</p>
                    <a href="#" className="btn btn-primary">Go Watch</a>
                </div>
             </div>  

        
        </>

    );
}
export default Movie;