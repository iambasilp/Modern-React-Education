import React from 'react'
import { Navbar,Home, About, Contact, Footer, Teacher, Course } from './container'
const App = () => {
  return (
    <div className='font-poppins bg-Solitude'>
      <Navbar />
      <Home />
      <About />
      <Course />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
