import Head from 'next/head'

import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Organization } from '@/components/Organization'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>JOIN Job Platform</title>
        <meta
          name="description"
        />
      </Head>
      <div className="overflow-x-hidden bg-gradient-to-l from-primary via-secondary to-primary">
        <Header />
        <main>
          <Hero />
          <PrimaryFeatures />
          <SecondaryFeatures />
          <Testimonials />
          <Pricing />
          <Faqs />
          <Organization />
        </main>
        <Footer />
        </div>
    </>
  )
}
