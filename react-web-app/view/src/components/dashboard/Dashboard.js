import {
  CCol,
  CRow,
  CTabs,
  CNav,
  CNavLink,
  CNavItem,
  CTabContent,
  CTabPane,
  CInput,
  CCardBody,
  CForm,
  CCard,
  CButton,
  CBadge,
  CDataTable,
  CModalHeader, CModalBody,CModal,
  CImg,
  CContainer
} from "@coreui/react";
import StarRatingComponent from "react-star-rating-component";
import React, { useState } from "react";
import CIcon from "@coreui/icons-react";
import MainChartExample from "../../views/charts/ChartBarSimple";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "src/config";

import swal from '@sweetalert/with-react'
const WidgetsDropdown = React.lazy(() =>
  import("../../views/widgets/WidgetsDropdown.js")
);

const Dashboard = () => {
  let history = useHistory()
  //const data = useSelector(state => state.dashboard);
  const [positiveRatingModalData,setPositiveRatingMOdalData]=useState()
  const [negativeRatingModalData,setNegativeRatingMOdalData]=useState()
  const notifications = useSelector(state => state.notifications)
  
  const dispatch = useDispatch()
  
  return (
    <>
      {/**tab panes */}
      <CContainer>

      </CContainer>
    </>
  );
};

export default Dashboard;
