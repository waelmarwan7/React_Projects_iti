import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const SelectInfo = (props) => {
    let styles={

        bg:{
            background: '#424242',
        },
        bg1:{
            background: '#666666',
        }
    }
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed text-light"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" style={styles.bg} aria-controls="collapseOne">
                    <h4>{props[0].title}</h4> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body text-light" style={styles.bg1}>
                    {props[0].text}
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button  text-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" style={styles.bg} aria-controls="collapseTwo">
                    <h4>{props[1].title}</h4> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body text-light" style={styles.bg1}>
                {props[1].text}
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button  text-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" style={styles.bg} aria-controls="collapseThree">
                    <h4>{props[2].title}</h4> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body text-light" style={styles.bg1}>
                {props[2].text}
                </div>
                </div>
            </div>
        </div>
    );
}

export default SelectInfo;
