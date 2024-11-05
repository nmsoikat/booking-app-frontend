import React from 'react'
import EventListPage from '../pages/EventListPage'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import HeroSection from '../components/ui/HeroSection'

export default function WebsiteLayout() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EventListPage />
      <Footer />
    </>
  )
}
