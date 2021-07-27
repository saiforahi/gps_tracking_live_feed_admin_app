import React, { useEffect } from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { API, BASE_URL } from 'src/config'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

const TheHeaderDropdown = () => {
  const full_name = useSelector(state=>state.user.data.first_name?state.user.data.first_name+' '+state.user.data.last_name:'Kaptan')
  const profile_pic = useSelector(state => state.user.data.profile_pic)
  let history=useHistory()
  const handle_logout=()=>{
    localStorage.clear()
    history.push('/')
  }
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={profile_pic!=null?BASE_URL+profile_pic:'assets/images/avatar.png'}
            className="c-avatar-img"
            alt=''
          />
        </div>
        <span style={{marginLeft:"8px"}}>{full_name}</span>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        {/* <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem> */}
    
     
        {/* <CDropdownItem divider /> */}
        <CDropdownItem onClick={handle_logout}>
          <CIcon name="cil-account-logout" className="mfe-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
