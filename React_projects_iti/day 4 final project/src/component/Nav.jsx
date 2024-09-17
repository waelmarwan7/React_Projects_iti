import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    let styles ={
        ulStyle: {listStyle:"none", display:"flex", justifyContent:"space-around", backgroundColor:"black", width:"100%",  padding:"15px"},
        aStyles: {textDecoration:"none", color:"white", fontSize:"18px"}
      }
    return (
      <>
        <nav style={styles.ulStyle}>
            <ul style={styles.ulStyle}>
            <li><Link style={styles.aStyles} to="/">Home</Link></li>
            <li><Link style={styles.aStyles} to="/contact">Contact Us</Link></li>
            <li><Link style={styles.aStyles} to="/about">About</Link></li>
            </ul>
        </nav>

        <div style={{color:'white',background:'black',textAlign:'center'}}><b><i >All rights reserved marwan 2024&copy;</i></b></div>
      </>
    );
}


export default Nav;
