import '../styles/globals.css'
import Navigation from '../components/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="w-2/3 mx-auto bg-first">
      <Navigation />
        {children}
        </body>
    </html>
  )
}
