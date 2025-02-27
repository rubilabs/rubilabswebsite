import Navbar from '@/components/navbar'
import React from 'react'
import KycIntro from './intro'
import Features from './features'
import Footer from '@/components/footer'
import Process from './process'
import Edge from './edge'
import Documentation from './documentation'

const index = () => {
  return (
    <>
     <Navbar />
     <KycIntro />
     <Features />
     <Process />
     <Edge />
     <Documentation />
     <Footer />
    </>
  )
}

export default index
