import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import RiskMonitoringIntro from './intro'
import RiskMonitoringFeatures from './features'
import UseCase from './use-case'
import Compatibility from './compatibility'
import Documentation from '../digital-onboarding/documentation'

const page = () => {
  return (
    <>
     <Navbar />
     <RiskMonitoringIntro />
     <RiskMonitoringFeatures />
     <UseCase />
     <Compatibility />
     <Documentation />
     <Footer />
    </>
  )
}

export default page
