import type { Metadata } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fabo Hax',
  description: 'CG Modeler with more than 5 years experience. Brazilian-Peruvian Artist studied architecture, drop out and dedicated to Blockchain and Deep Learning research. Based in Lima, Perú.',
  keywords: ['architect','developer', 'software', 'peru', 'lima', 'hacker', 'bitcoin', 'trader', 'writer', 'programador', 'desarrollador', 'arquitecto', 'artista', 'nft', 'callao', 'web', 'código', 'html', 'css', 'nextjs', 'javascript', 'python', 'php', 'ruby']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head><title>hax</title></Head>
      <body className={inter.className}>{children}</body>
      <Link href="mailto:40230@pm.me"><Image src="/dm.svg" className="dm" height={30} width={30} alt="Message me"></Image></Link>
    </html>
  )
}
