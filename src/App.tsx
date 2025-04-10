import { useEffect, useState } from 'react'
import reactLogo from 'assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import AppHeader from 'components/layout/AppHeader'
import Slider from 'components/layout/Slider'
import ProductSection from 'components/layout/FeaturedProducts'
import { fetchAccountAPI } from 'services/api'
import { useCurrentApp } from 'components/context/app.context'
import RingLoader from 'react-spinners/RingLoader'
import Footer from './components/layout/Footer'


function App() {
  return (
    <div>
      <AppHeader />
      <Slider />
      <ProductSection />
      <Footer />
      <Outlet />
    </div>
  )
}

export default App
