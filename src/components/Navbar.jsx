import React from 'react'

const Navbar = () => {
  return (
    <div>

        <nav className="navbar" style={{border:"double", display:"flex", flexWrap:"wrap", borderRadius:"30px"}}>
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
        </nav>
    </div>
  )
}

export default Navbar