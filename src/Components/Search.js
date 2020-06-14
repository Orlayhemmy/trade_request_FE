import React, { useContext, useState} from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AppContext from '../utils/context'
import { getIPhonesRequests } from '../api'

const FormWrapper = styled.div`
  display: flex;

  .MuiFormControl-root {
    width: 80%;
    margin-right: 8px;
  }

  .MuiButton-containedPrimary {
    height: 48px;
  }

  MuiInputBase-root MuiOutlinedInput-root Mui-focused,
  .MuiOutlinedInput-root, .MuiInputBase-root {
    {
    &:focused {
    outline: red auto 1px !important;
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
      <TextField id="outlined-basic" label="iPhone 8 Plus, 256gb, A1" variant="outlined" value={ searchText } onChange={ (event) => updateSearchText(event.target.value) }/>
      <Button variant="contained" color="primary" onClick={ () => searchIPhoneRequest() }>
        Search
      </Button>
    </FormWrapper>
)}

export default Search
