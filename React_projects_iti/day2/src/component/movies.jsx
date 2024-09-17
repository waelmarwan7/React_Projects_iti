import { PureComponent} from 'react';
import {v4 as uuid} from 'uuid';
import Movie from './movie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Movies extends PureComponent{




    constructor(){
        super();
        this.state=null;
    }


    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
        .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            this.setState(data)
            
            });
    }







    render(){
        if(this.state==null){return(
       <div style={{display:'flex'}}>
        
            <h1 style={{width:'12%',color:"white"}}>Loading....</h1> 
            <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" style={{color: "#74C0FC",marginTop:'2%'}} />
        </div>
        )}




        return(
            <>
                {console.log(this.state)}

               
                    <div className='row justify-content-evenly g-5'style={{backgroundColor:'black'}}>
                        {this.state.results.map((u)=>{return <Movie {...u} key={uuid()} ></Movie>})}
                    </div>
            </>
        );
    }


}
export default Movies;