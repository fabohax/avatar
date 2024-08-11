import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <footer className='mb-16'>
          <div className="items-center text-center justify-center hidden lg:block md:hidden">
              <Link href="/linkedin" target='_blank' className='m-4 inline-block'><Image src="/linkedin.svg" alt="linkedin" height="21" width="21"/></Link>
              <Link href="/github" target='_blank' className='m-4 inline-block'><Image src="/github.svg" alt="github" height="21" width="21"/></Link>
              <Link href="/telegram" target='_blank' className='m-4 inline-block'><Image src="/telegram.svg" alt="telegram" height="21" width="21"/></Link>
              <Link href="/x" target='_blank' className='m-4 inline-block'><Image src="/x.svg" alt="x" height="21" width="21"/></Link>
          </div>
          <div className="block items-center text-center justify-center lg:hidden md:block mt-24 mb-24">
              <Link href="/linkedin" target='_blank' className='m-4 block border-[1px] border-[#333] rounded-full p-4 hover:bg-white'><Image src="/linkedin.svg" alt="linkedin" height="21" width="21" className='inline-block mr-4'/>LinkedIn</Link>
              <Link href="/github" target='_blank' className='m-4 block border-[1px] border-[#333] rounded-full p-4 hover:bg-white'><Image src="/github.svg" alt="github" height="21" width="21" className='inline-block mr-4'/>Github</Link>
              <Link href="/telegram" target='_blank' className='m-4 block border-[1px] border-[#333] rounded-full p-4 hover:bg-white'><Image src="/telegram.svg" alt="telegram" height="21" width="21" className='inline-block mr-4'/>Telegram</Link>
              <Link href="/x" target='_blank' className='m-4 block border-[1px] border-[#333] rounded-full p-4 hover:bg-white'><Image src="/x.svg" alt="x" height="21" width="21" className='inline-block mr-4'/>X</Link>
          </div>
          <div id="#nostr" className='break text-center text-sm text-[#555] p-6'>npub1mvfmxhy4mfujqpjawsnp4ucsa03chrau4ly9u5js35n5r3f48wjqcks7g2</div>
      </footer>
    </>
  )
}
