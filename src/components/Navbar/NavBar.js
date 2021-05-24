import React from "react";
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';
import "./NavBar.css";
import GameCenter from "./GameCenter.png";

const NavBar = () =>{
return(
  <nav class="navbar navbar-expand-md bg-light navbar-light">
    <NavLink to = "/" exact>
    <img src={GameCenter} className="logo-navbar" alt="Game Center Logo"></img>
    </NavLink>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav"> 
      <li class="nav-item">
          <a class="nav-link" href="/#">Home</a>
        </li>    
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/#" id="navbardrop" data-toggle="dropdown">
        Productos
        </a>
        <div class="dropdown-menu">
        <NavLink to = "/Store">
          <a class="dropdown-item" href="/#">Todos</a>
        </NavLink>
        <NavLink to ="/Category/1">
          <a class="dropdown-item" href="/#">Mas vendidos</a>
        </NavLink> 
        </div>
        </li>
      </ul>
    
    </div>
    <NavLink to="/Cart">
    <CartWidget/>
    </NavLink>   
  </nav>
)
}

export default NavBar;