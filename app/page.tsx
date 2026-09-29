import React from 'react'
import Hero from  '../components/Hero'
import ActiveUsers from '@/components/ActiveUsers'

function HomePage() {
  return (
    <div>
      <button className="btn btn-primary">hello message for you</button>
      <Hero/> 
      <ActiveUsers/>
    </div>
  )
}

export default HomePage
