/* eslint-disable camelcase */
import axios from 'axios'

export const getIPhonesRequests = async ({ page, tradeType, price, size, name, grade, searchText }) => {
  const endcodedPrice = encodeURIComponent(JSON.stringify(price))
  const endcodedStorageSize = size ? encodeURIComponent(JSON.stringify(size)) : size
  const endcodedName = encodeURIComponent(JSON.stringify(name))
  const endcodedGrade = encodeURIComponent(JSON.stringify(grade))

  const response = await axios.get(`http://127.0.0.1:3000/api/v1/iphones-requests?trade_type=${tradeType}&page=${page}
  &price=${endcodedPrice}&size=${endcodedStorageSize}
  &name=${endcodedName}&grade=${endcodedGrade}
  &search_text=${searchText}
  &page_size=20`)
  return response.data
}

export const loadIPhonesRequests = async () => {
  const response = await axios.post('http://127.0.0.1:3000/api/v1/iphones-requests')
  return response
}
