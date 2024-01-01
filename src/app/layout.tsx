import { Metadata } from 'next' 
import './style.css'

export const metadata = {
  title: {
    default: 'Chronicle',
    template: '%s - Chronicle'
  },
  description: 'Social app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='body'>{children}</body>
    </html>
  )
}
