import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';




const HomeIntro = () => {

    // Define styles object
    const styles = {
        bg: {
            background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url('/asserts/EG-en-20240909-TRIFECTA-perspective_7f808c3d-9f43-4019-badf-f042e7345ad0_large.jpg')`,
            height: '100vh',
           
        },

        contBody: {
            padding: '15%'

        }
    };


    return (
        <div  style={styles.bg}>
            <div className='container'>

            <div className='row  align-items-center justify-content-between p-4'>
                <img src={'./asserts/logo.png'} className=' col-4 col-md-3 col-lg-2' alt='...'/>
                <Link to={'sign'}className='btn btn-danger col-2  col-md-2 col-lg-1 fs-6 fw-bold  align-self-center text-light'>Sign In</Link>
            </div>


            <div className='text-center text-light  row' style={styles.contBody}>
                <h1 className='fw-bolder'> Unlimited movies, TV shows, and more</h1>
                <p className='fw-bold'>Starts at EGP 70. Cancel anytime.</p>
                <p className='fw-bold'>Ready to watch? Enter your email to create or restart your membership.</p>

               <Link to={'createAcc'} className='d-flex btn btn-danger text-light col-3 col-sm-3 col-md-3 col-lg-2 px-3' style={{margin:'auto'}}>
                        <h5 className='fw-bold '>Get Started</h5>
                        <span className="carousel-control-next-icon" ></span>
               </Link>

            </div>
        </div>
        </div>
    );


   
    
}

export default HomeIntro;
