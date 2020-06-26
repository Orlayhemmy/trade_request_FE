import React, { useContext, useState } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import AppContext from '../utils/context'
import styled from 'styled-components'

const PaginationWrapper = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin: 20px 0 50px;

  @media only screen and (max-width: 350px) {
    .MuiPaginationItem-root {
      margin: 0;
      padding: 0;
    }
  }
`

const PaginationComponent = () => {
  const { totalPages, fetchData, currentTradeType } = useContext(AppContext)
  const [page, setPage] = useState(1)
  const handleChange = (event, value) => {
    setPage(value)

    fetchData({ page: value, tradeType: currentTradeType })
  }

  return totalPages
    ? (<PaginationWrapper
        count={totalPages || 0}
        variant="outlined"
        color="primary"
        page={page}
        onChange={handleChange}
      />)
    : null
}

export default PaginationComponent
