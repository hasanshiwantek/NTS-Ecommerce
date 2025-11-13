import React from 'react'
import AboutBanner from '../components/about/AboutBanner'
import GlobalSupplier from '../components/about/GlobalSupplier'
import AboutStats from '../components/about/AboutStats'
import AboutBrandSection from '../components/about/AboutBrandSection'
import SocialResponsibilitySection from '../components/about/SocialResponsibiltySection'
import GetInTouch from '../components/Home/GetInTouch'
import ProductServicesSection from '../components/about/ProductServicesSection'
const page = () => {
  return (
    <main className="flex flex-col gap-30">
        <AboutBanner/>
        <GlobalSupplier/>
        <AboutStats/>
        <AboutBrandSection/>
        <SocialResponsibilitySection/>
        <GetInTouch/>
        <ProductServicesSection/>
    </main>
  )
}

export default page