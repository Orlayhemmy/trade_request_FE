import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AppContext from '../utils/context'
import { getIPhonesRequests } from '../api'

const FormWrapper = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }

  @media only screen and (max-width: 350px) {
    display: block;
    width: 90%;

    button {
      margin-top: 8px;
    }
  }

  .MuiFormControl-root {
    width: 80%;
    margin-right: 8px;
  }

  .MuiOutlinedInput-input {
    background-color: #ffffff !important;
  }

  .MuiButton-containedPrimary {
    height: 48px;
    background-color: #ffffff !important;
    color: #3f51b5;
    border-radius: 5px;
  }

  MuiInputBase-root MuiOutlinedInput-root Mui-focused,
  .MuiOutlinedInput-root, .MuiInputBase-root {
    {
    &:focused {
    outline: red auto 1px !important;
    }
  }

  @media only screen and (max-width: 768px) {
    .MuiOutlinedInput-input {
      background: #ffffff;
    }
  }
`

const Search = () => {
  const { updateIphonesRequests, updatePageMeta } = useContext(AppContext)
  const [searchText, updateSearchText] = useState('')
  const searchIPhoneRequest = async () => {
    if (!searchText) return

    const response = await getIPhonesRequests({ searchText, tradeType: '' })
    updateIphonesRequests(response.phone_requests)
    updatePageMeta(response.meta)
  }

  return (
    <FormWrapper>
      <TextField id="outlined-basic" label="iPhone 8 Plus, 256gb, A1"
        variant="outlined"
        value={searchText}
        onChange={(event) => updateSearchText(event.target.value)}
      />
      <Button variant="contained" color="primary"
        onClick={() => searchIPhoneRequest()}>
        Search
      </Button>
    </FormWrapper>
)}

export default Search
