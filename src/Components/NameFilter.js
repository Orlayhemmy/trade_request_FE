import React, { useContext } from 'react'
import Box from '@material-ui/core/Box'
import RenderCheckboxes from '../utils/RenderCheckboxes'
import AppContext from '../utils/context'

const NameFilter = () => {
  const { fetchData } = useContext(AppContext)
  const filterByModel = (value) => {
    fetchData({ tradeType: '', name: value })
  }
  return (
    <Box>
      <RenderCheckboxes
        values={['iPhone 11', 'iPhone X']} 
        title={'Model'} 
        handleFilter={ filterByModel }
        />
    </Box>
  )
}

export default NameFilter
