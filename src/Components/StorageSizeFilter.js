import React, { useContext } from 'react'
import Box from '@material-ui/core/Box'
import Checkboxes from '../utils/Checkboxes'
import AppContext from '../utils/context'

const StorageSizeFilter = () => {
  const { fetchData } = useContext(AppContext)
  const filterBySize = (value) => {
    fetchData({ tradeType: '', size: value })
  }
  return (
    <Box>
      <Checkboxes
        values={['16GB', '32GB', '64GB', '128GB', '256GB', '512GB']}
        title={'Storage'}
        handleFilter={ filterBySize }
      />
    </Box>
  )
}

export default StorageSizeFilter
