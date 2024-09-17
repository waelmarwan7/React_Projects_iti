import React from 'react';


const About = () => {
    return (
        <div style={{height:'100vh', background: `linear-gradient(180deg, rgba(15,13,75,1) 2%, rgba(0,0,0,1) 15%)`}}>
        <div className='fs-1 fw-bolder text-light'style={{width: "50rem",margin:'auto'}}>About</div>
        <br></br><br></br>
        <div className="card align-items-center bg-secondary" style={{width: "50rem",height:'25rem',margin:'auto'}}>
        <div className="card-body p-5 fs-4">
            <p className="card-text fw-bold text-light" >Every company has its "Cinderella" story about those dark times when it has just started hitting the
                market. Our story takes its beginning in 2013, at a small office with a few like - minded people and
                bottomless cups of coffee, that kept us working throughout the night when we have just started
                building a company with a strong idea. We strived to build a brand that will contribute to the world
                with useful products that empower people and make their lives easier. We still believe in it today.</p>
        </div>
        </div>
    </div>
    );
}

export default About;
