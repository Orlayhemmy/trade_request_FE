/* eslint-disable no-return-assign */
import React, { useState } from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import PropTypes from 'prop-types'

const Wrapper = styled(FormGroup)`
  border-top: 1px solid #e8e4e4;
  padding: 16px 0;

  p {
    margin: 0 0 0.35em;
  }

  .MuiSvgIcon-root {
    width: 18px;
    height: 18px;
    fill: #3f51b5;
  }
`

const Checkboxes = ({ values, title, handleFilter }) => {
  const objState = values.reduce((a,b)=> (a[ b.replace(/\s/g, '') ]=false,a),{})
  const [state, setChecked] = useState(objState)
  const handleChange = (event) => {
    const newState = { ...state, [ event.target.name ]: event.target.checked }
    const arr = []
    setChecked(newState)
    Object.keys(newState).forEach(function(data) {
      if (!newState[ data ]) {
        delete newState[ data ]
      } else {
        values.forEach(value => {
          if (value.replace(/\s/g, '') ===  data) arr.push(value.toLowerCase())
        })
      }
    })
    handleFilter(arr)
  }

  return (
    <Wrapper>
      <p>{title}</p>
      {values.map(value => (
        <FormControlLabel
          control={ <Checkbox checked={ state[ value.replace(/\s/g, '') ] }
          onChange={ handleChange } name={ value.replace(/\s/g, '') } /> }
          label={ value }
        />
      ))}
    </Wrapper>
  )
}

Checkboxes.propTypes = {
  values: PropTypes.array,
  title: PropTypes.string,
  handleFilter: PropTypes.func
}

export default Checkboxes