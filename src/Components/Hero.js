import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import HeroBG from '../images/hero_background.jpg'

const HeroWrapper = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px 10px;
  margin: 0 auto;
  background-color: #ffffff;

  @media only screen and (min-width: 1720px) {
    margin: 0 100px
  }
`

const HeroTop = styled.div`
  display: flex;
  flex: 2;
  background-image: url(${HeroBG});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  > div:nth-child(2) {
    display: flex;
    width: 50%;
    margin: 0 auto;

    @media only screen and (max-width: 350px) {
      width: 80%;
    }
  }
`

const Overlay = styled.div`
  background: #15141499;
  position: absolute;
  width: 100%;
  height: 100%;
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
    color: #ffffff;
    text-align: center;

    @media only screen and (max-width: 768px) {
      font-size: 32px;
    }
  }
`
const SearchSection = styled.div`
  flex: 1;
  background-color: #3f51b5;
  display: flex;
  align-items: center;
`

const Hero = () => (
  <HeroWrapper>
    <HeroTop>
      <Overlay />
      <HeroCaption>
        <h1>
          SHOP OUR LATEST
          AVAILABLE STOCK HERE
        </h1>
      </HeroCaption>
    </HeroTop>
    <SearchSection>
      <Search />
    </SearchSection>
  </HeroWrapper>
)

export default Hero
