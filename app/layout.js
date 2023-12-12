import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eğlence sektörü',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
      </Head>
      <body className={inter.className} style={{background: '#4A4A4A'}}>{children}</body>
    </html>
  )
}
