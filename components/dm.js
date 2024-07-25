import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function DM() {
  return (
    <>
      <Link href="/contact" className='mail'>
          <Image src="/mail.svg" height={25} width={25} alt="mail" className='fixed bottom-6 right-5 z-50'></Image>
      </Link>
    </>
  )
}
