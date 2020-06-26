/* eslint-disable max-len */
/* eslint-disable camelcase */
import axios from 'axios'

const APP_URI = process.env.REACT_APP_URI

export const getIPhonesRequests = async ({
  page, tradeType, price, size, name, grade, searchText
}) => {
  const endcodedPrice = encodeURIComponent(JSON.stringify(price))
  const endcodedStorageSize = size 
    ? encodeURIComponent(JSON.stringify(size)) : size
  const endcodedName = encodeURIComponent(JSON.stringify(name))
  const endcodedGrade = encodeURIComponent(JSON.stringify(grade))
  let response

  if (searchText) {
    response = await axios.get(`${APP_URI}/search-phones?search_text=${searchText}&page=${page}&page_size=20`)
  } else {
    response = 
    await axios.get(`${APP_URI}/phones-requests?trade_type=${tradeType}&page=${page}
    &price=${endcodedPrice}&size=${endcodedStorageSize}&name=${endcodedName}&grade=${endcodedGrade}&search_text=${searchText}
    &page_size=20`)
  }

  return response.data
}

export const loadIPhonesRequests = async () => {
  const response = await axios.post(`${APP_URI}/phones-requests`)
  return response
}
