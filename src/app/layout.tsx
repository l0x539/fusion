import Layout from '@/components/layout/Layout'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Jost, Montserrat, Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const helvetica = localFont({
  src: [
    {
      path: './assets/fonts/Helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/Helvetica-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './assets/fonts/helvetica_medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/fonts/helvetica-light-587ebe5a59211.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-helvetica'
})

export const metadata: Metadata = {
  title: 'Fusion - Digital Innovation Experts',
  description: 'Explore cutting-edge solutions in web development, design, and digital innovation with Fusion. We specialize in creating immersive experiences and transformative digital solutions to drive your business forward.',
  keywords: "Web Development, Design Solutions, Digital Innovation, Immersive Experiences, Creative Design, User-Centric Design, Custom Software Development, Technology Consulting, Brand Strategy, User Experience Optimization",
  robots: 'index, follow',
  openGraph: {
    type: "website",
    url: "https://fusion.bi",
    title: "Fusion - Digital Innovation Experts",
    description: "Explore cutting-edge solutions in web development, design, and digital innovation with Fusion. We specialize in creating immersive experiences and transformative digital solutions to drive your business forward.",
    images: "https://fusion.bi/assets/images/wallpaper.jpg",
    videos: "https://fusion.bi/assets/images/incode.mp4"
  },
  twitter: {
    card: "summary_large_image",
    site: "https://fusion.bi",
    title: "Fusion - Digital Innovation Experts",
    description: "Explore cutting-edge solutions in web development, design, and digital innovation with Fusion. We specialize in creating immersive experiences and transformative digital solutions to drive your business forward.",
    images: "https://fusion.bi/assets/images/wallpaper.jpg",
    creator: "fusion.bi"
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
  icons: "/assets/images/icon2.png",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`touch-pan-y ${montserrat.variable} ${spaceGrotesk.variable} ${jost.variable} ${helvetica.variable} ${inter.variable}`}>
      <body className='touch-pan-y select-none font-main'>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}

export const dynamic = 'force-static';