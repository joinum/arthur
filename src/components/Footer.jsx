import Image from 'next/image'

import { Socials } from '@/components/Socials'

import logo from '@/images/logo.svg'

import cords from '@/images/cords/footer_cords.svg'

export function Footer() {
  return (
    <footer className="static h-full w-full lg:pt-14 px-8 lg:px-14 xl:px-20">
      <div className="-mt-[160px] absolute right-0 w-96 hidden lg:block">
        <Image src={cords} alt="footer cord"/>
      </div>
      <div className="flex justify-between items-center py-10">
        <div className="flex gap-x-12">
          <Socials />
        </div>
        <Image
          src={logo}
          width={128}
          height={50} 
        />
        <p className="text-md cursor-pointer text-white font-semibold hover:underline">
          General Regulation
        </p>
      </div>
    </footer>
  )
}
