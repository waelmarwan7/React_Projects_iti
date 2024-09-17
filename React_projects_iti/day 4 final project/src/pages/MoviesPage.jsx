
import {v4 as uuid} from 'uuid';
import Movie from '../component/movie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { memo, useEffect, useState } from 'react';
import Search from '../component/search';

const MoviesPage = ()=> {

    let [movieslist,setmovelist]=useState(null)
    let [state,setState] = useState(null)





// component did mount
    useEffect(()=>{

        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
        .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setmovelist(data.results)
            setState(data.results)
            console.log('fetched')
            
            })
       },[]);













   function searchmovie(key){
 
       setState(movieslist.filter((u)=>{return u.title.includes(key)}))
    }






    
        if(state==null){return(
       <div style={{display:'flex'}}>
        
            <h1 style={{width:'13%',color:"black"}}>Loading....</h1> 
            <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" style={{color: "#74C0FC",marginTop:'2%'}} />
        </div>
        )}




        return(
          
                
                <div style={{backgroundColor:'black'}}>
                    <div className=' mx-5 p-5'>
                        <Search searchmovie={searchmovie}></Search>
                    </div>
                    <div className='row justify-content-between g-5 '>
                        {state.map((u)=>{return <Movie {...u} key={uuid()} ></Movie>})}
                    </div>
                </div>
           
        );
    


}

export default memo(MoviesPage);