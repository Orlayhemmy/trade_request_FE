/* eslint-disable computed-property-spacing */
import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Slider from '@material-ui/core/Slider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AppContext from '../utils/context'

const Wrapper = styled.div`
  border-top: 1px solid #e8e4e4;
  padding: 16px 0;
  
  @media only screen and (min-width: 768px) {

  }

  .MuiFormControl-root {
    margin: 10px 0;
  }

  p {
    margin: 0 0 0.35em;
  }

  button {
    height: 42px;
    font-size: 14px;

    @media only screen and (min-width: 768px) {
      font-size: 14px;
      height: 28px;
    }
  }
`

const PriceFilter = () => {
  const [value, setValue] = useState([20, 2000])
  const { fetchData } = useContext(AppContext)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleInputChange = ({ target: { value: data } }, position) => {
    position === 'min'
      ? setValue([data, value[1]])
      : setValue([value[0], data])
  }

  const filterByPrice = () => {
    fetchData({ tradeType: '', price: [value[0], value[1]] })
  }

  return (
    <Wrapper>
      <p>Price</p>
      <Slider
        value={ value }
        onChange={ handleChange }
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        max={2000}
        min={20}
      />
      <TextField
        id="outlined-basic"
        label="Min"
        variant="outlined"
        value={ value[0] }
        onChange={(event) => handleInputChange(event, 'min')}
      />
      <TextField
        id="outlined-basic"
        label="Max"
        variant="outlined"
        value={ value[1] }
        onChange={(event) => handleInputChange(event, 'max')}
        />
      <Button
        variant="contained"
        color="primary"
        onClick={filterByPrice}
      >
        Submit
      </Button>
    </Wrapper>
  )
}

export default PriceFilter
