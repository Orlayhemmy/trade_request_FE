import React from 'react'
import styled from 'styled-components'
import { Alert } from '@material-ui/lab'

const StyledAlert = styled(Alert)`
  position: fixed;
  top: 18px;
  right: 0;
  border-radius: 1px !important;
`

const AlertComponent = ({ message, status }) => (
  <StyledAlert severity={'success' || status} >
    {message}
  </StyledAlert>
)

export default AlertComponent