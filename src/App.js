import React, { useState, useEffect } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import './App.css'
import { getIPhonesRequests } from './utils/api'
import Devices from './Components/Devices'
import OptionsComponent from './Components/OptionsComponent'
import AppContext from './utils/context'
import AlertComponent from './Components/AlertComponent'
import Hero from './Components/Hero'
import MobileFilter from './Components/MobileFilter'
import SideDrawer from './Components/SideDrawer'
import LoadPhones from './Components/LoadPhones'
import TradeTypeContainer from './Components/TradeTypeContainer'
import Footer from './Components/Footer'

const App = () => {
  const [iPhones, updateIphonesRequests] = useState([])
  const [loading, setLoading] = useState(false)
  const [pageMeta, updatePageMeta] = useState({})
  const [currentTradeType, updateCurrentTradeType] = useState('buy')
  const [messageInfo, updateMessageInfo] = useState({})
  const matches = useMediaQuery('(max-width:920px)')
  const [showDrawer, setDrawer] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setDrawer(open)
  }

  const fetchData = async (data) => {
    setLoading(true)
    const response = await getIPhonesRequests(data)
    updateIphonesRequests(response.phone_requests)
    updatePageMeta(response.meta)
    setLoading(false)
    setDrawer(false)
  }

  const tradeTypeRequest = (tradeType) => {
    updateCurrentTradeType(tradeType)
    fetchData({ page: 1, tradeType: 'sell' })
  }

  useEffect(() => {
    fetchData({ tradeType: 'buy' })
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...pageMeta,
        fetchData, 
        updateMessageInfo,
        updateIphonesRequests,
        updatePageMeta,
        currentTradeType,
        tradeTypeRequest,
        toggleDrawer,
        showDrawer,
        setLoading
      }}
    >
      <div className="App">
        <Hero />
        <TradeTypeContainer />
        <div className="container-body">
          {!matches && <OptionsComponent />}
          <div className="body-content">  
            <Devices devices={ iPhones } loading={loading} />
          </div>
        </div>
        {matches && <SideDrawer />}
        <LoadPhones />
        {matches && <MobileFilter />}
        {Boolean(Object.keys(messageInfo).length)
          && <AlertComponent {...messageInfo} />
        }
      </div>
      <Footer />
    </AppContext.Provider>
  )
}

export default App
