import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Reviews() {
  return (
    <>
      <div className="reviews flex flex-col md:flex-row md:space-x-4 my-16">
        <div className="review p-4">
            <p className="text-italic">
            <i>&apos;Agradecido con Fabo; entrega resultados de alta calidad y colabora sólidamente.&apos;</i>
            </p>
            <p className="font-bold">
            <Link href="https://www.instagram.com/artadiarchitects/" target="_blank">Javier Artadi</Link>
            </p>
        </div>
        <div className="review p-4">
            <p className="text-italic">
            <i>&apos;Fabo excels in his endeavors, even when navigating uncharted territory.&apos;</i>
            </p>
            <p className="font-bold">
            <Link href="https://www.linkedin.com/in/marcus-albert-producer/" target="_blank">Marcus Albert</Link>
            </p>
        </div>
        <div className="review p-4">
            <p className="text-italic">
                <i>&apos;Fabo contributes valuable ideas to the team and actively assists with research efforts.&apos;</i>
            </p>
            <p className="font-bold">
                <Link href="https://www.linkedin.com/in/andrewvoronkov/" target="_blank">Andrey Voronkov</Link>
            </p>
        </div>
      </div>
    </>
  )
}
