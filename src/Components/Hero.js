import React, {useContext, Fragment} from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import AppContext from '../utils/context'
import Search from './Search'
import HeroBG from '../assets/hero_bg.png'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const HeroWrapper = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #2f6cccf5;
  margin: 0 auto;
  @media only screen and (max-width: 580px) {
    background-image: url(${HeroBG});
    background-repeat: no-repeat;
    background-size: cover;
  }
`

const HeroTop = styled.div`
  display: flex;

  > div:nth-child(2) {
    display: flex;
    width: 50%;
    justify-content: flex-end;

    img {
      height: 400px;
  
      @media only screen and (max-width: 580px) {
        height: 340px;
      }
    }
  }
`

const HeroCaption = styled.div`
  padding: 0 16px;
  width: 50%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  z-index: 2;

  @media only screen and (max-width: 580px) {
    width: auto;
  }

  h1 {
    font-size: 42px;
    text-align: left;
    line-height: 1.5;

    @media only screen and (max-width: 768px) {
      font-size: 32px;
    }
  }
`
const RequestSection = styled.div`
  margin-top: 32px;

  button {
    border-radius: 0;
    box-shadow: none;
    height: 48px;

    @media only screen and (min-width: 768px) {
      font-size: 12px;
    }
  }
`

const Hero = () => {
  const {tradeTypeRequest, currentTradeType} = useContext(AppContext)
  const matches = useMediaQuery('(max-width:580px)')
  
  return (
    <HeroWrapper>
      <HeroTop>
        <HeroCaption>
          <h1>
            SHOP OUR LATEST
            AVAILABLE STOCK HERE
          </h1>
          <Search />
        </HeroCaption>
        {!matches && <div><img src={ HeroBG } /></div>}
      </HeroTop>
      <RequestSection>
        <Button variant={ currentTradeType === 'buy' ? 'contained' : 'outlined' } color="primary" onClick={ () => tradeTypeRequest('buy') }>
          Buy Requests
        </Button>
        <Button variant={ currentTradeType === 'buy' ? 'outlined' : 'contained' } color="primary"  onClick={ () => tradeTypeRequest('sell') }>
          Sell Requests
        </Button>
      </RequestSection>
    </HeroWrapper>
)}

export default Hero
