// this is for the main one 
import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <main className='main'>

      
<div className="div-main" style={{border:"solid"}}>
    <div className='div-one' style={{width:"230px"}}></div>
   
    <div className='div-two'>


<div className="box-one">
        {/* <h6>this is the main portion of the page</h6> */}

        <h3 style={{ textAlign:"center"}}>Objectives</h3>
        <div style={{borderBottom:"solid", borderBottomColor:"red", width:"40%", textAlign:"center", alignContent:"center", marginLeft:"430px", marginBottom:'40px'}}></div>
        <p>
            Committed Full Stack MERN developer with a sound record of working towards meeting the goals of the organization adopting the standard practices while adhering to its regulations. Skilled in working and handling challenging situations keeping the organizational benefits as the topmost priority. 
       
       
        </p>

        {/* this is the technical profile section  */}

        <h3 id='technical-profile' style={{textAlign:"center"}}>Technical Profile</h3>
          <div style={{borderBottom:"solid", borderBottomColor:"red", width:"40%", textAlign:"center", alignContent:"center", marginLeft:"430px", marginBottom:'40px'}}></div>

        <ul>
            <li>
Database and Backend Frameworks: MongoDB, Express, Node, Node Package Manager

            </li>
            <li>
Languages: Javascript, Python C, C++ 

            </li>
            <li>
                Design tools: Bootstrap, HTML, CSS 

            </li>
            <li>
                Front-end: React.js, Next.js

            </li>
            <li>
                IDE: VS Code 

            </li>
            <li>

Others: Git, GitHub, TypeScript 

            </li>
        </ul>
{/* this is the end of the technical profile section  */}

{/* this is the competency section  */}
        <h3 id ="competencies" style={{textAlign:"center"}}>Competencies  </h3>
         <div style={{borderBottom:"solid", borderBottomColor:"red", width:"40%", textAlign:"center", alignContent:"center", marginLeft:"430px", marginBottom:'40px'}}></div>
        <ul>
            <li>
                Skilled in utilizing CRUD web applications 
	

            </li>
            <li>
                Responsive UI designs in the web applications 
            </li>
            <li>
Database Management with a secure connection with the front-end 

            </li>
        </ul>


{/* this is the end of the competency section */}


{/* this is for the experience section */}
        <h3 id='experience' style={{textAlign:"center"}}>Experience </h3>
         <div style={{borderBottom:"solid", borderBottomColor:"red", width:"40%", textAlign:"center", alignContent:"center", marginLeft:"430px", marginBottom:'40px'}}></div>
        <b>
            August 2022-until now Freelance Programmer and for Kalam Ink Tech Pvt. Ltd.
        </b>
        <ul>
            <li>
                Worked as a front-end developer mainly in React js, React native and Javascript 

            </li>
            <li>
                Built small-scale web apps using React.js and JavaScript
            </li>
            <li>
                Created responsive user interfaces for personal and community projects
            </li>
            <li>
                Gained experience using GitHub and deployment tools like Render & Netlify

            </li>
        </ul>
        <b>
            Feb 2022- MERN Stack Course,  Durshikshya Education Network Pvt. Ltd, July 2022 	Kathmandu, Nepal      </b>
            <ul>
                <li>
Designed full-stack projects using MongoDB, Express, React, and Node
                </li>
                <li>
                    Built an e-commerce web app with secure user login and CRUD product features
                </li>
                <li>
                    Integrated APIs, styled with Bootstrap & Material UI
                </li>
                <li>
                    Implemented user verification using Mailtrap and encryption methods
                </li>
                <li>
                    Used Redux and middleware for managing state and backend requests
                </li>
            </ul>
	

   


{/* this is the end of the experience section */}


{/* this is for the education section */}
        <h3 id="education" style={{textAlign:"center"}}>Education</h3>
         <div style={{borderBottom:"solid", borderBottomColor:"red", width:"40%", textAlign:"center", alignContent:"center", marginLeft:"430px", marginBottom:'40px'}}></div>
        <b>
November Bachelor of Engineering, Electronics and 
2013-August Communication, Location,  Tribhuvan University, Kathmandu 2017 Engineering College, Kalimati, Kathmandu  
        </b>
        <ul>
            
Final year project on Vehicle Tracking and Alert system with the use of ARDUINO and Object Oriented programming language to run the overall system. 
            
        </ul>

{/* this is the end of the eduction section  */}
<p>
    
 


 



 



</p>
        


    </div>

    </div>



    <div className='div-three' style={{width:"230px"}}></div>

    


</div>
      

    </main>
  )
}

export default Main