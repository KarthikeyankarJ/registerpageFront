import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Loyout = ({Children}) => {
  return (
    <>
    <Header />
    <div className='content'>
      {Children}
      <h1>Site Under Process</h1>

    </div>

    <Footer />
  </>
  )
}

export default Loyout