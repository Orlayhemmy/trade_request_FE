import React, { createContext, useState, useEffect } from 'react'
import './App.css'
import { getIPhonesRequests } from './api'
import { Devices } from './Components/Devices'
import OptionsComponent from './Components/OptionsComponent'
import AppContext from './utils/context'
import AlertComponent from './Components/AlertComponent'
import Hero from './Components/Hero'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import MobileFilter from './Components/MobileFilter'
import SideDrawer from './Components/SideDrawer'
import LoadPhones from './Components/LoadPhones'

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
        showDrawer
      }}
    >
      <div className="App">
        <Hero />
        <div className="container-body">
          {!matches && <OptionsComponent />}
          <div className="body-content">  
            <Devices devices={ iPhones } loading={loading} />
          </div>
        </div>
        {matches && <SideDrawer />}
        <LoadPhones />
        {matches && <MobileFilter />}
        {Object.keys(messageInfo).length & <AlertComponent {...messageInfo} />}
      </div>
    </AppContext.Provider>
  )
}

export default App
