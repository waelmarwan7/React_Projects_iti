import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUsPage = () => {
    return (
        <div style={{height:'100vh',background:'#212121'}}>
            <div className='fs-1 fw-bolder text-light'style={{width: "50rem",margin:'auto'}}>contact us</div>
            <br></br><br></br>
            <div className="card align-items-center " style={{width: "50rem",height:'25rem',margin:'auto',background:'#696969'}}>
            <div className="card-body w-75 p-5">
                <h5 className="card-title fs-5 fw-bold text-light " style={{width: "15rem",margin:'auto'}}>Contant Us On this Email</h5>
                <a className='btn btn-secondary w-75 my-3' style={{margin:'auto',padding:'1rem'}} href="mailto:support@gmail.com">Support@gmail.com</a>
                <p className="card-text fw-bold" >Need help or have inquiries? Send us a message by email, and we will immediately assist you.</p>
            </div>
            </div>
        </div>
    );
}

export default ContactUsPage;
