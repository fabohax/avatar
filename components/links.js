import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
        <div class="linx">
            <Link href="/sites">Sites</Link>
            <Link href="/models">Models</Link>
            <Link href="/ai" className='selected'>AI</Link>
            <Link href="/architecture">Architecture</Link>
        </div>
    </>
  )
}
