import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import About from './introduction'
import Profile from './profile'
import Values from './presence'
import Alliances from './alliances'
import FAQ from './faq'
import Announcements from './announcements'
import Contact from '../contact'

const page = () => {
  return (
    <>
     <Navbar />
     <About />
     <Values />
     <Profile />
     <Alliances />
     <Announcements />
     <FAQ />
     <Contact />
     <Footer />
    </>
  )
}

export default page
