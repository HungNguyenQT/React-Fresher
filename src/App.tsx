import { useEffect, useState } from 'react'
import reactLogo from 'assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import AppHeader from 'components/layout/AppHeader'
import Slider from 'components/layout/Slider'
import ProductSection from 'components/layout/FeaturedProducts'
import { fetchAccountAPI } from 'services/api'
import { useCurrentApp } from 'components/context/app.context'
import RingLoader  from 'react-spinners/RingLoader'
import Footer from './components/layout/Footer'


function App() {
  const [count, setCount] = useState(0)
  const{setUser,isAppLoading,setIsAppLoading,setIsAuthenticated}= useCurrentApp();
  useEffect(()=>{
    const fetchAccount = async() =>{
      const res = await fetchAccountAPI();
      if(res.data){
        setUser(res.data.user)
        setIsAuthenticated(true);
      }

      setIsAppLoading(false)
    }
    fetchAccount();
  },[])
  return (
    <>
    {isAppLoading===false ?
    <div>
      <AppHeader/>
      <Slider/>
      <ProductSection/>
      <Footer/>
      <Outlet/>
    </div>
    :
    <div style={{
            position: "fixed", 
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}>
        <RingLoader
          size={50}
        />
      </div>
      }
    </>
  )
}

export default App
