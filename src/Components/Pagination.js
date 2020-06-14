import React, { useContext, useState } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import AppContext from '../utils/context'
import styled from 'styled-components'

const PaginationWrapper = styled(Pagination)`
  display: flex;
  justify-content: center;
`

const PaginationComponent = () => {
  const { totalPages, fetchData, currentTradeType } = useContext(AppContext)
  const [page, setPage] = useState(1)
  const handleChange = (event, value) => {
    setPage(value)

    fetchData({ page: value, tradeType: currentTradeType })
  }

  return (
    <PaginationWrapper count={ totalPages } variant="outlined" color="primary"  page={ page } onChange={ handleChange } />
  )
}

export default PaginationComponent
