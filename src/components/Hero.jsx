import Image from 'next/image'

import { Socials } from '@/components/Socials'

import logo from '@/images/logo.svg'

import cords from '@/images/cords/hero_cords.svg'

import subvisual from '@/images/sponsors/subvisual.svg'
import accenture from '@/images/sponsors/accenture.svg'
import deloitte from '@/images/sponsors/deloitte.svg'
import miniclip from '@/images/sponsors/miniclip.svg'
import mercedesbenz from '@/images/sponsors/mercedesbenz.svg'
import kelvin from '@/images/sponsors/kelvin.svg'

export function Hero() {
  return (
    <div className="pt-24 pb-16 text-center w-full px-8 lg:px-14 xl:px-20">
      <Image
        src={logo}
        width={700}
        height={250} 
      />
      <h1 className="mx-auto max-w-4xl font-display text-5xl tracking-tight text-white font-extrabold sm:text-7xl">
        Job Platform
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-white">
        <span className="opacity-60">
          After almost two decades of organizing a job shop event once a year, we now, join forces once more, to bring {" "} 
        </span>
        <span className="font-semibold">
          a year around activity program and a web platform to recruit the best talent our university has to offer.
        </span>
      </p>
      <div className="hidden xl:flex pt-24 justify-between items-center">
        <div className="flex flex-col space-y-6 w-auto">
          <Socials />
        </div>
        <div >
          <div className="flex flex-row-reverse text-white font-bold text-2xl">
            We are trusted by
          </div>
          <div className="pt-6 flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
            <div className="absolute -right-8 -mt-8 h-auto w-[1000px]"> 
              <Image src={cords} alt="hero cords"/>
            </div>
            <div key="Subvisual" className="flex">
              <Image src={subvisual} alt="Subvisual" width={100} height={80} unoptimized />
            </div>
            <div key="Accenture" className="flex">
              <Image src={accenture} alt="Accenture" width={100} height={80} unoptimized />
            </div>
            <div key="Miniclip" className="flex">
              <Image src={miniclip} alt="Miniclip" width={100} height={80} unoptimized />
            </div>
            <div key="Deloitte" className="flex">
              <Image src={deloitte} alt="Deloitte" width={100} height={80} unoptimized />
            </div>
            <div key="Mercedesbenz" className="flex">
              <Image src={mercedesbenz} alt="Mercedesbenz" width={100} height={80} unoptimized />
            </div>
            <div key="Kelvin" className="flex">
              <Image src={kelvin} alt="Miniclip" width={100} height={80} unoptimized />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
