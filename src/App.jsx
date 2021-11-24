import { useState } from 'react'

import Header from './Header'
import Footer from './Footer'

import HomePage from './pages/HomePage'
import PatientPage from './pages/PatientPage'
import BloodDonarPage from './pages/BloodDonarPage'




import {Routes, Route} from 'react-router-dom'


function App() {

  const keepTheFooterAtTheBottom = {minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'space-between'}
 
  return (

      <div style={keepTheFooterAtTheBottom} >

        
        <div>  {/* Wrapper (Without footer)  */}

          <div className='_mb-16px'>
           <Header />
          </div>


          <Routes>

                <Route path='/'  element={<HomePage/>} /> 

                <Route path='/patient'  element={<PatientPage/>} /> 

                <Route path='/donor'  element={<BloodDonarPage/>} /> 

          </Routes>
      

        </div>{/* End: Wrapper (Without footer) */}

        <Footer />
  

      </div>


  )
}

export default App


