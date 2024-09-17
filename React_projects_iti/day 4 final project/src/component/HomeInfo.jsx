import {v4 as uuid} from 'uuid';
import React, { useState } from 'react';
import Slider from './slider';
import InfoCard from './InfoCard';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import SelectInfo from './SelectInfo';

const HomeInfo = () => {

     let [state,setState]=useState([
        {
            title:'Enjoy on your TV',

            text:'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
        },
        {
            title:'Download your shows to watch offline',

            text:'Save your favorites easily and always have something to watch.'
        },
        {
            title:'Watch everywhere',

            text:'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
        },
        {
            title:'Create profiles for kids',

            text:'Send kids on adventures with their favorite characters in a space made just for them — free with your membership.'
        }])

     let [selectinfo,setselectinfo]=useState([
        {
            title:'Can I watch content for free?',

            text:'Unfortunately, you can only explore the content for free. You will have to subscribe to enjoy watching the WATCH IT’s library..',

        },
        {
            title:'How to subscribe?',

            text:'You can subscribe to WATCH IT through 3 simple & easy steps Open watchit.com from any browser Enter your email  set your password Choose one of 3 subscription plans thats suits you. Choose the number of devices suitable for you and your family',
        },
        {
            title:'How many devices can I watch on at the same time?',

            text:'You can log onto your account from 15 devices at the same time and you can watch on one device or more simultaneously based on your subscription plan as stated below: 1 Device 2 Devices 3 Devices',
        },
       ])


    const styles = {
        bg: {
            background: `linear-gradient(180deg, rgba(15,13,75,1) 2%, rgba(0,0,0,1) 15%)`,
            height: '100%',
           
        },
        hrLine:{
            background: 'radial-gradient(circle, rgba(101,0,121,1) 25%, rgba(176,14,14,1) 82%)',
            height:'0.4rem',


        },

      
    }

    return (
        <div  style={styles.bg}>
            <div style={styles.hrLine}></div><br></br>
            <div className='container'>
                <h2 className='text-light'>Trending Now</h2>
                <Slider></Slider><br></br><br></br><br></br><br></br><br></br><br></br>
                <h2 className='text-light'>More Reasons to Join</h2>
                <div className='row justify-content-between'>
                    {state.map((u)=>{return <InfoCard {...u} key={uuid()}></InfoCard>})}
                </div><br/><br/>
                <h2 className='text-light'>Frequently Asked Questions</h2>
                <div>
                    <SelectInfo {...selectinfo} key={uuid()}></SelectInfo><br></br><br></br><br></br><br></br>
                </div>
            </div>
        </div>
    );

}

export default HomeInfo;
