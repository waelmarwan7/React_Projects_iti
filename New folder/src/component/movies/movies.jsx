import { useState } from 'react';

import {v4 as uuid} from 'uuid';
import Movie from '../movie/movie';

function Movies(){
    let [moviestate] = useState([
        {imgsrc:'./assets/Screenshot 2024-09-09 144004.png',rating:'9.0/10',name:'THE Dark Knight'},
        {imgsrc:'./assets/Screenshot 2024-09-09 144122.png',rating:'9.5/10',name:'Interstellar'},
        {imgsrc:'./assets/Screenshot 2024-09-09 144205.png',rating:'8.6/10',name:'Spiderman No Way Home'}
    ])


    return(

        <div className='row justify-content-evenly align-items-center'>
            {moviestate.map((u)=>{return<Movie key = {uuid()} {...u}></Movie>})}

        </div>
    ); 
}
export default Movies;