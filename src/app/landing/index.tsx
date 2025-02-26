import Navbar from '@/components/navbar'
import React from 'react'
import Hero from '../hero'
import CaseStudies from '../clients'
import Footer from '@/components/footer'
import Commitment from '../commitment'
import Products from '../products'
import Contact from '../contact'

const Landing = () => {
  return (
    <>
     <Navbar />
     <Hero />
     <CaseStudies />
     <Commitment />
     <Products />
     <Contact />
     <Footer />
    </>
  )
}

export default Landing
