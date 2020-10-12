import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './NavBar.css';




class NavBar extends Component {

    render() {
        return (
            <div class="topnav" id="myTopnav">
                <a href="#home" class="active">Home</a>
                <a href="#news">Projects</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
                </a>
           </div>
              )
    
    } 
} 


export default NavBar