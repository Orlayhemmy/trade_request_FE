import React, {useContext} from 'react'
import Box from '@material-ui/core/Box'
import RenderCheckboxes from '../utils/RenderCheckboxes'
import AppContext from '../utils/context'

const StorageSizeFilter = () => {
  const {fetchData} = useContext(AppContext)
  const filterBySize = (value) => {
    fetchData({tradeType: '', size: value})
  }
  return (
    <Box>
      <RenderCheckboxes values={['16GB', '32GB', '64GB', '128GB', '256GB', '512GB']} title={'Storage'} handleFilter={ filterBySize }/>
    </Box>
  )
}

export default StorageSizeFilter
