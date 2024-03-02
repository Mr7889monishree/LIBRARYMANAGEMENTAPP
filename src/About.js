import React from 'react'
import './index.css'
import {FaBookOpen, FaCanadianMapleLeaf } from 'react-icons/fa';


const About = () => {
  return (
    <main >
      
      <article>
        <section className='About'>
          <h1>About <span>LibraPlus</span> Library Management System</h1>
          <h3>Welcome to LibraPlus</h3>
          
          <p>
            LibraPlus is a state-of-the-art library management system designed to streamline the operations of libraries, whether they are small community libraries or large academic institutions. Our system aims to simplify the process of cataloging, managing, and accessing library resources while providing an intuitive user experience for both librarians and patrons.
          </p>
          
          <h1>Key Features:</h1>
          <p>
            <FaCanadianMapleLeaf style={{color:'black'}}/> LibraPlus allows librarians to effortlessly organize and catalog books, journals, multimedia materials, and other resources using a comprehensive database system.
          </p>
          <p>
            <FaCanadianMapleLeaf style={{color:'black'}}/> With a clean and intuitive interface, LibraPlus makes it easy for patrons to search for and access library materials, reserve items, and manage their accounts.
          </p>
          <p>
            Flexible Membership Management LibraPlus provides flexible membership management features, allowing libraries to easily register new members, issue library cards, and track borrowing history.
          </p>
          
          <p>
            <FaCanadianMapleLeaf style={{color:'black'}}/> Gain valuable insights into library usage, circulation trends, and inventory status with LibraPlus's comprehensive reporting tools, empowering libraries to make informed decisions.
          </p>
          
          Why Choose LibraPlus?
          <p>
            <FaBookOpen style={{color:'green'}}/> LibraPlus streamlines library operations, saving time and resources for librarians and patrons alike. and Our user-friendly interface ensures that library resources are easily accessible to all users, promoting inclusivity and enhancing the library experience.
          </p>
          <p>
            <FaBookOpen style={{color:'yellow'}}/> Whether you're managing a small community library or a large academic institution, LibraPlus is scalable to meet your needs, now and in the future.
          </p>
          
          <footer>
            <p>
              <FaBookOpen style={{color:'green'}}/> Get Started with LibraPlus Today <FaBookOpen style={{color:'green'}}/>
            </p>
          </footer>
        </section>
</article>

    </main>
  )
}

export default About