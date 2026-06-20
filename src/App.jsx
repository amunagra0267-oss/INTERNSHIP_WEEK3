import "./App.css";
import React from 'react'

const App = () => {
  return (
    <div>
      <div className='container'>
        <h2>Aman Nagra</h2>
        <h3>B.Tech CSE Student</h3>
        <div className='contact'>
          <p>Contact - +91,9549901113</p>
          <p>Email : amannagra0267@gmail.com</p>
        </div>
        <div className='links'>

          <p>
            🔗
            <a
              href="https://www.linkedin.com/in/ammu-nagra0267"
              target="_blank"
            >
              LinkedIn
            </a>
           💻
          <a
            href="https://github.com/amunagra0267-oss"
            target="_blank"
          >
            GitHub
          </a>
</p>
          <p> 📍 Address: Hanumangarh, Rajasthan</p>
        </div>
      </div>
    </div>
  )
}

export default App;