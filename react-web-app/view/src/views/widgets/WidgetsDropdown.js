import React, { useEffect } from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import { useHistory } from 'react-router-dom';

const WidgetsDropdown = (data) => {
  const history = useHistory();
  const handleClick = () => history.push('/dashboard/scan-history');
  // render
  useEffect(()=>{
    console.log(data)
  },[])
  return (
    <CRow className="mt-3">
      <CCol sm="6" lg="3">
        <CWidgetDropdown className="pb-4"
          color="gradient-primary"
          header={String(data.data.total_scan)}
          text="Total Scans" onClick={handleClick}
          // footerSlot={
          //   <ChartLineSimple
          //     pointed
          //     className="c-chart-wrapper mt-3 mx-3"
          //     style={{height: '70px'}}
          //     dataPoints={[65, 59, 84, 84, 51, 55, 40]}
          //     pointHoverBackgroundColor="primary"
          //     label="Members"
          //     labels="months"
          //   />
          // }
        >
          {/* <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown className="pb-4"
          color="gradient-info"
          header={String(data.data.total_user)}
          text="Registered Officers"
          onClick = {()=>{history.push('/dashboard/employees')}}
          // footerSlot={
          //   <ChartLineSimple
          //     pointed
          //     className="mt-3 mx-3"
          //     style={{height: '70px'}}
          //     dataPoints={[1, 18, 9, 17, 34, 22, 11]}
          //     pointHoverBackgroundColor="info"
          //     options={{ elements: { line: { tension: 0.00001 }}}}
          //     label="Members"
          //     labels="months"
          //   />
          // }
        >
          {/* <CDropdown>
            <CDropdownToggle caret={false} color="transparent">
              <CIcon name="cil-location-pin"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown className="pb-4"
          color="gradient-warning"
          header={String(data.data.total_badge)}
          text="Total Badges"
          onClick = {()=>{history.push('/dashboard/badges')}}
          // footerSlot={
          //   <ChartLineSimple
          //     className="mt-3"
          //     style={{height: '70px'}}
          //     backgroundColor="rgba(255,255,255,.2)"
          //     dataPoints={[78, 81, 80, 45, 34, 12, 40]}
          //     options={{ elements: { line: { borderWidth: 2.5 }}}}
          //     pointHoverBackgroundColor="warning"
          //     label="Members"
          //     labels="months"
          //   />
          // }
        >
          {/* <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
