import React, { useEffect } from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import { TOKEN } from '../config'
import { Redirect, useHistory } from "react-router"
import { WebSocketBridge } from 'django-channels'
import swal from '@sweetalert/with-react'
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';


const TheLayout = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch()
  let history = useHistory()
  let web_socket = new WebSocketBridge()
  const isLoggedIn = () => {
    if (localStorage.getItem(TOKEN) === null || localStorage.getItem(TOKEN) === '') {
      return false;
    }
    return true;
  }
  return (
    <>
      {
        isLoggedIn() === false &&
        <Redirect to="/login" />
      }
      <div className="c-app c-default-layout">
        <TheSidebar />
        <div className="c-wrapper">
          <TheHeader />
          <div className="c-body">
            <TheContent />
          </div>
          <TheFooter />
        </div>
      </div>
    </>
  )
}

export default TheLayout
