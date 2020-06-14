import React from 'react'
import styled from 'styled-components'
import {makeStyles} from '@material-ui/core/styles'
import {Alert, AlertTitle} from '@material-ui/lab'

const StyledAlert = styled(Alert)`
  position: fixed;
  top: 18px;
  right: 0;
  border-radius: 1px !important;
`

const AlertComponent = ({message, status}) => (
  <StyledAlert severity={'success' || status} >
    {message}
  </StyledAlert>
)

export default AlertComponent
