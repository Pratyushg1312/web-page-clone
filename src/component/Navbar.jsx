import React, { useRef, useState } from 'react'
import "./navbar.css"
import { Navigationbutton } from './Navigationbutton'
import { UilDashboard } from '@iconscout/react-unicons';
import { UilCube } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilCoins } from '@iconscout/react-unicons'
import { UilCommentAltShare } from '@iconscout/react-unicons'
import { UilQuestion } from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom';
import { UilPolygon } from '@iconscout/react-unicons'
import {UilAngleDown } from '@iconscout/react-unicons'
export const Navbar = () => {
    const [modifier,setnamemod]= useState("Dashboard");
    const [checked,setchecked]= useState();
    const chkbox=useRef();
  return (
    <>
    <input 

 type="checkbox" ref={chkbox} checked={checked} id="nav-tog" />
<label htmlFor="nav-tog" className="nav-tog-lab" onClick={() => { setchecked(!checked) }} >
<span className="line"></span>
<span className="line"></span>
<span className="line"></span>
</label>
<div className='navbar'>
<div className="pack1">
<div className="activepagename">
<div className="logo" onClick={() => { setchecked(!checked) }} ><UilPolygon size="45px"/></div>
<h1>{modifier}</h1>
</div>
<div className="nav">
<ul>
  <li onClick={()=>{setnamemod("dashboard")}}><NavLink to="/dashboard" ><Navigationbutton  page="Dashboard" iconcomp={<UilDashboard/>}/></NavLink></li>
  <li onClick={()=>{setnamemod("Product")}}><NavLink to="/product" ><Navigationbutton page="Product" iconcomp={<UilCube/>}/></NavLink></li>
  <li onClick={()=>{setnamemod("Customers")}}><NavLink to="/customers"><Navigationbutton page="Customers" iconcomp={<UilUser/>}/></NavLink></li>
  <li onClick={()=>{setnamemod("Income")}}><NavLink to="/income" ><Navigationbutton page="Income" iconcomp={<UilCoins/>}/></NavLink></li>
  <li onClick={()=>{setnamemod("Promote")}}><NavLink to="/promote"><Navigationbutton page="Promote" iconcomp={<UilCommentAltShare/>}/></NavLink></li>
  <li onClick={()=>{setnamemod("Help")}}><NavLink to="/help" ><Navigationbutton page="Help" iconcomp={<UilQuestion/>}/></NavLink></li>
</ul>
</div>
</div>

<div className="profile">
<div className="pack">
<div className="pic"></div>
<p>Pratyush Gupta</p>
</div>

<div className="arrow" ><UilAngleDown/></div>


</div>
</div>
    </>
    
  )
}
