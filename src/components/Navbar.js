import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from '../imagen/logo.png';


class Navbarprincipal extends Component {
    
        render() {
            
        return(
        
        <nav class="navbar navbar-expand-sm bg-light navbar-light">
  
        <img src={logo}></img>
        </nav>           
            
        )
    }
}

export default Navbarprincipal;