import React, { useContext } from 'react'
import Drawer from '@material-ui/core/Drawer'
import OptionsComponent from './OptionsComponent'
import AppContext from '../utils/context'
import styled from 'styled-components'

const StyledDrawer = styled(Drawer)`
  > div {
    padding: 16px 0
  }
`

const SideDrawer = () => {
  const {showDrawer, toggleDrawer} = useContext(AppContext)

  const list = () => (
    <OptionsComponent />
  )

  return (
    <div>
      <StyledDrawer anchor={ 'right' } open={ showDrawer } onClose={ toggleDrawer(false) }>
        {list()}
      </StyledDrawer>
      ))}
    </div>
  )
}

export default SideDrawer
