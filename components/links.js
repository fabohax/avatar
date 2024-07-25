import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Links() {
  return (
    <>
        <div class="linx">
            <Link href="/sites">Sites</Link>
            <Link href="/models">Models</Link>
            <Link href="/ai">AI</Link>
            <Link href="/architecture">Architecture</Link>
        </div>
    </>
  )
}
