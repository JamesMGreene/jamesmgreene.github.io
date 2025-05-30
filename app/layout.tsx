import { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

const roboto_mono = Roboto_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-roboto-mono' })

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.SITE_NAME}`,
    default: process.env.SITE_NAME || 'My Site!'
  },
  description: 'The personal site of James M. Greene, a seasoned software engineer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${inter.variable} ${roboto_mono.variable} antialiased`}>
      <link rel='icon' type='image/png' href='/favicon-512x512.png' sizes='512x512' />
      <link rel='icon' type='image/png' href='/favicon-96x96.png' sizes='96x96' />
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' sizes='any' />
      <link rel='shortcut icon' href='/favicon.ico' />

      <body>{children}</body>
    </html>
  )
}
