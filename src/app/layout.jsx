import SiteNavbar from '@/components/SiteNavbar'
import './globals.css'
import Footer from '@/components/Footer'
import NextTopLoader from 'nextjs-toploader';
import { Poppins } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins(
  { 
    subsets: ['latin'],
    weight:['400','500','600','700'],
    variable: '--font-poppins'
  }
)


// Dynamic metadata
export async function generateMetadata(){
  // SEO Data Fetch
  return {
    title: 'Design Agency',
    description: 'A Design Agency Web Application - NextJs 13, REST API, SEO Friendly',
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader color="#D7F5DC" height={3} speed={200}/>
        <SiteNavbar></SiteNavbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
