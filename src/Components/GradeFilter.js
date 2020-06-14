import React, {useContext} from 'react'
import Box from '@material-ui/core/Box'
import RenderCheckboxes from '../utils/RenderCheckboxes'
import AppContext from '../utils/context'

const GradeFilter = () => {
  const {fetchData} = useContext(AppContext)
  const filterByGrade = (value) => {
    fetchData({tradeType: '', grade: value})
  }
  return (
    <Box>
      <RenderCheckboxes values={ ['A1', 'B1', 'A2', 'B2', 'C', 'C/B', 'C/D', 'new'] } title={ 'Grade' } handleFilter={ filterByGrade } />
    </Box>
  )
}

export default GradeFilter
