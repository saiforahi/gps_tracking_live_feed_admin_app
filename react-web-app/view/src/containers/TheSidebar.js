import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavItem,
  CLabel
} from '@coreui/react'
//import { CIcon } from '@coreui/icons-react';

import { useHistory } from 'react-router'
import '../assets/warehouse.svg'
import './TheSidebar.css'
import { changeState } from 'src/store/slices/SideBarSlice';
import CIcon from '@coreui/icons-react'
const TheSidebar = () => {
  const dispatch = useDispatch()
  let history=useHistory()
  const show = useSelector(state => state.sidebar.sidebarShow)
  const badge = useSelector(state => state.user.data.badge_number)
  const [group,setGroup] = React.useState('')
  useEffect(()=>{
    setGroup(localStorage.getItem('group'))
  },[])
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch(changeState(val))}
    >
      <CSidebarBrand className="d-md-down-none text-center" to="/">

        <CIcon
          name="cib-codeship"
          height={25}
        />
        {/* <img src={'assets/images/nypd.png'} className="sidebar-brand"/> */}
      </CSidebarBrand>
      <CSidebarNav>
        <CSidebarNavItem to="/dashboard" icon="cil-speedometer" name="Dashboard"></CSidebarNavItem>
        <CSidebarNavTitle>Administration</CSidebarNavTitle>
        <CSidebarNavItem to="/dashboard/live-tracking" onClick={()=>{history.push('/dashboard/live-tracking')}} icon="cil-map" name="Live Tracking"></CSidebarNavItem>
      </CSidebarNav>

      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
