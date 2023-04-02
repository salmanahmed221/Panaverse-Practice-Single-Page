import React from 'react'
import Bootcamp from './components/Bootcamp'
import Cities from './components/Cities'
import Getstarted from './components/Getstarted'
import HeroSection from './components/HeroSection'
import Instructor from './components/Instructor'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Instructor />
      <Bootcamp />
      <Getstarted />
      <Cities />
    </div>
  )
}

