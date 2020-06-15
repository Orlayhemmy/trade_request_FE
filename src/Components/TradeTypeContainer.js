import React, { useContext } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import AppContext from '../utils/context'

const RequestSection = styled.div`
  margin: 16px 0;

  button {
    border-radius: 0;
    box-shadow: none;
    height: 48px;

    @media only screen and (min-width: 768px) {
      font-size: 12px;
    }
  }

  .MuiButton-label {
    font-weight: 600;
  }

  .MuiButton-outlinedPrimary {
    background-color: #ffffff;

    @media only screen and (min-width: 768px) {
      background-color: transparent;
    }
  }
`

const TradeTypeContainer = () => {
  const { tradeTypeRequest, currentTradeType } = useContext(AppContext)
  
  return (
    <RequestSection>
      <Button variant={currentTradeType === 'buy' ? 'contained' : 'outlined'}
          color="primary" onClick={() => tradeTypeRequest('buy')}
        >
        Buy Requests
      </Button>
      <Button variant={currentTradeType === 'buy' ? 'outlined' : 'contained'}
        color="primary"  onClick={() => tradeTypeRequest('sell')}
        >
        Sell Requests
      </Button>
    </RequestSection>
  )
}

export default TradeTypeContainer
