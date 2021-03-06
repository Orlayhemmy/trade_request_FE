import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'
import { phoneImages } from '../utils/phoneImages'
import PaginationComponent from './Pagination'

const DeviceOuterWrapper = styled.div`
  display: block;
  position: relative;
`

const DeviceOverlay = styled.div`
  background: #dedcdcd6;
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  left: 50%;
  display: block;
`

const DeviceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 12px;

  @media only screen and (min-width: 350px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 1240px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (min-width: 1240px) {
    grid-template-columns: repeat(5, 1fr);
  }
  
  @media only screen and (min-width: 1720px) {
    grid-template-columns: repeat(6, 1fr);
  }
`

const DeviceContainer = styled.div`
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 3px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 48px;
  }

  button {
    color: white;
  }
`
const DeviceImage = styled.div`
  display: flex;
  position: relative;
  justify-content: center;

  img {
    height: 100px;

    @media only screen and (min-width: 768px) {
      height: 180px;
    }
  }

  button {
    position: absolute;
    right: 0;
    min-width: auto;
    padding: 4px 12px;
    background-color: #282c34;
    border-radius: 2px;
    font-size: 14px;

    @media only screen and (min-width: 768px) {
      font-size: 10px;
      padding: 0px 8px;
    }
  }
`

const DeviceDescription = styled.div`
  padding: 8px;

  p {
    margin: 2px;
    text-align: left;
    font-size: 22px;
    text-transform: capitalize;

    @media only screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  .device-name {
    font-weight: 500;
    text-transform: uppercase;
  }

  .device-price {
    font-weight: 800;
  }

  .device-status-ram, .device-quantity {
    font-size: 16px;
    margin-bottom: 8px;

    @media only screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  .device-unit-title {
    font-size: 14px;

    @media only screen and (min-width: 768px) {
      font-size: 12px;
    }
  }
`

const ActionButton = styled(Button)`
  background-color: #3f51b5 !important;
  padding: 6px 24px !important;
  margin: 8px !important;
  font-size: 14px !important;

  @media only screen and (min-width: 768px) {
    font-size: 12px;
  }
`

const Devices = ({ devices = [], loading }) => (
  <DeviceOuterWrapper>
    {loading && (
      <DeviceOverlay>
        <p>Loading Phones</p>
        <CircularProgress />
      </DeviceOverlay>
    )}
    <DeviceWrapper>
      {devices.map((iPhone) => (
        <DeviceContainer key={iPhone._id}>
          <DeviceImage>
            <img src={phoneImages[ iPhone.name ]} />
            <Button>{iPhone.grade}</Button>
          </DeviceImage>
          <DeviceDescription>
            <p className="device-name">{iPhone.name}</p>
            <p className="device-status-ram">{iPhone.status} | {iPhone.size}</p>
            <p className="device-unit-title">Unit Price</p>
            <p className="device-price">${iPhone.price}</p>
            <p className="device-quantity">1500 available</p>
          </DeviceDescription>
          <ActionButton>{iPhone.trade_type}</ActionButton>
        </DeviceContainer>
        )
      )}
    </DeviceWrapper>
    <PaginationComponent />
  </DeviceOuterWrapper>
)

Devices.propTypes = {
  devices: PropTypes.array,
  loading: PropTypes.bool
}

export default Devices
