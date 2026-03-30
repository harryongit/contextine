import React from 'react'
import CustomerHero from './CustomerHero'
import CustomerLogos from './CustomerLogos'
import CustomerCaseStudies from './CustomerCaseStudies'
import CustomerStoriesGrid from './CustomerStoriesGrid'
import CustomerMetrics from './CustomerMetrics'
import CustomerTestimonials from './CustomerTestimonials'
import CustomerWhyChoose from './CustomerWhyChoose'
import CustomerCTA from './CustomerCTA'

const Customers = () => {
  return (
    <main className="bg-white selection:bg-brand/10 selection:text-brand min-h-screen overflow-hidden">
      <CustomerHero />
      <CustomerLogos />
      <CustomerCaseStudies />
      <CustomerStoriesGrid />
      <CustomerMetrics />
      <CustomerTestimonials />
      <CustomerWhyChoose />
      <CustomerCTA />
    </main>
  )
}

export default Customers
