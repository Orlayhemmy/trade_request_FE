import React from 'react'
import styled from 'styled-components'
import NameFilter from './NameFilter'
import StorageSizeFilter from './StorageSizeFilter'
import PriceFilter from './PriceFilter'
import GradeFilter from './GradeFilter'

const Wrapper = styled.div`
  flex: 1;
  padding: 0 16px;
  text-align: left;
  color: #5f5c5c;
  height: fit-content;
  max-width: 230px;

  h4, p {
    font-size: 24px;

    @media only screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  span {
    font-size: 18px;

    @media only screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  h4 {
    margin: 0;
    margin-bottom: 20px;
  }
`

const OptionsComponent = () => (
  <Wrapper>
    {/* <LoadPhones /> */}
    <h4>Filter by</h4>
    <NameFilter />
    <PriceFilter />
    <StorageSizeFilter />
    <GradeFilter />
  </Wrapper>
)

export default OptionsComponent
