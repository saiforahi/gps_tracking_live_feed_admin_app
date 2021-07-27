import React, { useEffect, useState } from "react";
import {
  CButton,
  CModal,
  CModalHeader,

  CInputRadio,
  CModalBody,
  CModalFooter,
  CInput,
  CRow,
  CContainer,
  CCol,
  CLabelBASE_URL,
  CTextarea,
  CSelect,
} from "@coreui/react";
import { Link, Redirect } from "react-router-dom";
import { TOKEN } from "../../config";
import "./Home.css";
import Header from "../header/header";
import Footer from "../footer/Footer";
import StarRatingComponent from "react-star-rating-component";
import ReactDOM from "react-dom";
import { ProgressBar } from "react-bootstrap";

// import { from } from 'core-js/core/array'
const isLoggedIn = () => {
  if (localStorage.getItem(TOKEN) === null) {
    return false;
  }
  return true;
};

const Home = () => {
  const [showDownloadCardModal, setShowDownloadCardModal] = useState(false);
  const toggle1 = () => {
    setShowDownloadCardModal(!showDownloadCardModal);
  };
  
  // let history=useHistory()
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("home mounted");
  }, [count]);
  return (
    <>
    <Redirect to="/login"/>
    </>
  )
}
export default Home;
