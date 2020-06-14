import React, { useContext } from 'react'
import Fab from '@material-ui/core/Fab'
import FilterIcon from '@material-ui/icons/FilterList'
import styled from 'styled-components'
import AppContext from '../utils/context'
import Tooltip from '@material-ui/core/Tooltip'

const Wrapper = styled(Fab)`
  position: fixed !important;
  bottom: 18px;
  right: 18px;
  background-color: #3971cf !important;
`

const MobileFilter = () => {
  const { toggleDrawer } = useContext(AppContext)
  
  return (
    <Tooltip title="Filter" aria-label="filter">
      <Wrapper color="primary" aria-label="filter" onClick={toggleDrawer(true)}>
        <FilterIcon />
      </Wrapper>
    </Tooltip>
  )
}

export default MobileFilter
