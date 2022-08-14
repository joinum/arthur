import Image from 'next/image'

import { Container } from '@/components/Container'

import di from '@/images/logos/di.svg'
import ecum from '@/images/logos/ecum.svg'
import cesium from '@/images/logos/cesium.svg'
import necc from '@/images/logos/necc.svg'
import nefum from '@/images/logos/nefum.svg'

export function Organization() {
  return (
    <section
      className="relative overflow-hidden py-20"
    >
      <Container className="relative">
      <div class="flex flex-col gap-y-20 items-center">
        <div class="text-lg font-extrabold text-white uppercase md:text-2xl">
          Organized with 🤍 by
        </div>
        <div class="grid grid-cols-2 gap-x-5 gap-y-10 place-items-center">

            <Image width={160} height={100} src={di}/>
            <Image width={160} height={100} src={ecum}/>
            <Image width={160} height={100} src={cesium}/>
            <Image width={160} height={100} src={necc}/>
            <Image width={160} height={100} src={nefum}/>

        </div>
      </div> 
      </Container>
    </section>
  )
}
