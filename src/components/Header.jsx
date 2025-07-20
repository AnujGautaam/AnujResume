// this is for the header component 
import React from 'react'
import "./Header.css"
import image from "../images/2.jpg"
import Navbar from './Navbar'
const Header = () => {
  return (
    <header>
        <div className='header-one'>
            <h4 style={{width:"420px"}}></h4>

            {/* i will create a small div for the title and the address */}


            <div>
            <div style={{borderBottom:"solid red"}}></div>

{/* <h2 style={{borderBottom:"solid red"}}>
       Anuj Gautam Resumé
        </h2> */}
        <h1 style={{margin:"20px"}}>
            Anuj Gautam Resumé
        </h1>
        <h4 style={{margin:"20px"}}><i>a.gautam1528@gmail.com, +61 0480714216</i> </h4>
        <h4 style={{margin:"20px"}}><i><a href='https://github.com/AnujGautaam?tab=repositories'>1st GitHub</a>, <a href='https://github.com/BusinessTester'>2nd GitHub</a> </i> </h4>

        {/* this is an attemp for the underline */}
            <div style={{borderBottom:"solid red"}}></div>
        {/* underline attempt end */}
            </div>
        
        <h3 style={{width:"320px"}}></h3>
        {/* this is for the insertion of image */}
        <div className="header-two">
            <img className="header-two-img" src={image} alt='' style={{height:"150px", width:"150px"}}/>
        </div>

        {/* end of image insertion */}
        </div>
        
        {/* <nav className="navbar" style={{border:"double", display:"flex", flexWrap:"wrap", borderRadius:"30px"}}>
            <ul className='navbar-items' style={{display:"flex", padding:"20px", margin:"20px", justifyContent:"space-even", listStyleType:"none"}}>
                <li>
                  <h3 style={{marginRight:"20px"}}>
                    <a href='#technical-profile'>Technical Profile </a> 
                    </h3> 
                </li>
                  
                <li>
                  <h3 style={{marginRight:"20px"}}>
                    <a href='#competencies'>Competencies </a> 
                  </h3>
                     
                </li>
                <li>
                  <h3 style={{marginRight:"20px"}}>
                    <a href='#experience'>Experience</a> 
                  </h3>
                  
                </li>
                 <li>
                  <h3 style={{marginRight:"20px"}}>
                    <a href='#education'>Education</a> 
                  </h3>
                  
                </li>

           
            </ul>
        </nav> */}
        <Navbar/>
        


        </header>
  )
}

export default Header