import React, { useContext } from 'react'
import AppContext from '../utils/context'
import { loadIPhonesRequests } from '../utils/api'
import Fab from '@material-ui/core/Fab'
import DownloadIcon from '@material-ui/icons/CloudDownload'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Wrapper = styled(Fab)`
  position: fixed !important;
  bottom: 18px;
  left: 18px;
  background-color: #3f51b5 !important;

  p {
    margin: 0 10px;
  }
`

const LoadPhones = () => {
  const { updateMessageInfo } = useContext(AppContext)
  const loadPhones = async () => {
    updateMessageInfo({ 
      message: 'Loading Phones',
      status: 'info'
    })
    const response = await loadIPhonesRequests()
    updateMessageInfo({ 
      message: response.data.message,
      status: response.status === 200 ? 'success' : 'error'
    })
    setTimeout(() => {
      updateMessageInfo('')
    }, 5000)
  }
  const matches = useMediaQuery('(max-width:920px)')

  return (
    <Tooltip title="Load Phones" aria-label="load phones">
      <Wrapper
        variant="extended"
        color="primary"
        aria-label="filter"
        onClick={ loadPhones }
      >
        <DownloadIcon />
        {!matches && <p>Load Phones</p>}
      </Wrapper>
    </Tooltip>
  )
}

export default LoadPhones
