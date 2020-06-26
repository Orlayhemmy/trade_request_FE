import React, { useContext } from 'react'
import Box from '@material-ui/core/Box'
import Checkboxes from '../utils/Checkboxes'
import AppContext from '../utils/context'

const NameFilter = () => {
  const { fetchData } = useContext(AppContext)
  const filterByModel = (value) => {
    fetchData({ tradeType: '', name: value })
  }
  return (
    <Box>
      <Checkboxes
        values={[
          'iPhone XS Max', 'iPhone XS', 'iPhone XR', 'iPhone X',
          'iPhone 8 PLUS', 'iPhone 8', 'iPhone 7 PLUS', 'iPhone 7',
          'iPhone 6S Plus', 'iPhone 6S', 'iPhone 6 Plus', 'iPhone 6',
          'iPhone SE'
        ]} 
        title={'Model'} 
        handleFilter={ filterByModel }
        />
    </Box>
  )
}

export default NameFilter
