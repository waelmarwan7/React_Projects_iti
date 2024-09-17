import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const InfoCard = (props) => {

    let [state,setState]=useState(1);

    const styles = {
        card:{
            width:'19rem',
            height:'18.5rem',
            background:' linear-gradient(171deg, rgba(13,12,52,1) 71%, rgba(83,7,48,1) 100%)',
            borderTopLeftRadius: '1.5rem', 
            borderTopRightRadius: '1.5rem', 
            borderBottomLeftRadius: '1.5rem', 
            borderBottomRightRadius: '1.5rem', 
        },



    }



    if(state==null){return(
        <div style={{display:'flex'}}>
         
             <h1 style={{width:'13%',color:"black"}}>Loading....</h1> 
             <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" style={{color: "#74C0FC",marginTop:'2%'}} />
         </div>
         )}



    return (
        <div className="card col-5 col-lg-2" style={styles.card}>
                <div className="card-body">
                    <h3 className="card-title text-light">{props.title}</h3>
                    <h6 className="card-subtitle mb-2 text-body-secondary ">{props.subtitle}</h6><br/>
                    <p className="card-text text-secondary">{props.text}</p>
                </div>
        </div>
    );
}

export default InfoCard;
