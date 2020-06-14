import React, { useEffect, useContext } from 'react'
import AppContext from '../utils/context'
import { loadIPhonesRequests } from '../api'
import Fab from '@material-ui/core/Fab'
import DownloadIcon from '@material-ui/icons/CloudDownload'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'

const Wrapper = styled(Fab)`
  position: fixed !important;
  bottom: 18px;
  left: 18px;
  background-color: #3f51b5 !important;
`

const LoadPhones = () => {
  const { updateMessageInfo } = useContext(AppContext)
  const loadPhones = async () => {
    const response = await loadIPhonesRequests()
    updateMessageInfo({ 
      message: response.data.message,
      status: response.status === 200 ? 'success' : 'error'
    })
    setTimeout(() => {
      updateMessageInfo('')
    }, 5000)
  }

  return (
    <Tooltip title="Load Phones" aria-label="load phones">
      <Wrapper color="primary" aria-label="filter" onClick={ loadPhones }>
        <DownloadIcon />
      </Wrapper>
    </Tooltip>
  )
}

export default LoadPhones
