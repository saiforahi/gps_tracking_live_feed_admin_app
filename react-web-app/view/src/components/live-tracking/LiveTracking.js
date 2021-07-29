import { CContainer, CRow, CCol } from '@coreui/react'
import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './leafletStyles.css'
import { PUBLIC_API } from 'src/config';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import sampledata from './sample'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
}));

const LiveTracking = () => {
    const classes = useStyles();
    const position = [51.505, -0.09]
    const [previous_devices, setPreviousDevices] = useState(localStorage.getItem('previous_devices')?localStorage.getItem('previous_devices'):[])
    const [devices, setDevices] = useState([])
    const [count, setCount] = useState(0)
    React.useEffect(() => {
        const interval = setInterval(() => {
            PUBLIC_API.get('device/data/last/').then((res) => {
                localStorage.setItem('previous_devices', devices)
                setPreviousDevices(devices)
                setDevices(res.data.data)
            })
        }, 30000);
        return () => clearInterval(interval);
    })
    function getHeading(index) {
        var lat1 = Number(previous_devices[index].lat) * Math.PI / 180;
        var lat2 = Number(devices[index].lat) * Math.PI / 180;
        var dLon = (Number(devices[index].lng) - Number(previous_devices[index].lng)) * Math.PI / 180;
        var y = Math.sin(dLon) * Math.cos(lat2);
        var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

        var brng = Math.atan2(y, x);

        return (((brng * 180 / Math.PI) + 360) % 360);
    }
    function getBearing(index) {
        var lat1 = Number(previous_devices[index].lat)
        var lat2 = Number(devices[index].lat)
        let lng_distance = Number(devices[index].lng)- Number(previous_devices[index].lng)
        const X =  Math.cos(lat1) * Math.sin(lng_distance)
        const Y = Math.cos(lat2) * Math.sin(lat1) - Math.sin(lat2) * Math.cos(lat1) * Math.cos(lng_distance)
        const B = Math.atan2(X,Y)
        return (((B * 180 / Math.PI) + 360) % 360);
        // const y = Math.sin(λ2 - λ1) * Math.cos(φ2);
        // const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(λ2 - λ1);
        // const θ = Math.atan2(y, x);
        // const brng = (θ * 180 / Math.PI + 360) % 360;
    }
    return (
        <>
            <div className={classes.root}>
                <CContainer>
                    {devices.length > 0 ? <CRow className="justify-content-center">
                        <CCol>
                            <MapContainer center={[23.6850, 90.3563]} zoom={8} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                {devices.length > 0 && Array.from(devices).map((device, idx) =>
                                    <Marker key={idx} position={[Number(device.lat), Number(device.lng)]} icon={new Icon({ iconUrl: device.sos == 'True' ? 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png' : markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                                        <Popup>
                                            Lat : {device.lat}<br />Lng : {device.lng}<br />Device ID : {device.device__device_id}<br />Battery: {device.battery}. <br /> signal_strength1 : {device.signal_strength1} <br /> signal_strength2: {device.signal_strength2}<br /> speed : {device.speed} <br /> sos : {device.sos} <br /> sim_no : {device.sim_no} <br /> locked_satellite : {device.locked_satellite} <br /> heading : {previous_devices.length < 1 ? '(N/A)' : getBearing(idx) == '0' ? 'not moving' : getBearing(idx)}
                                        </Popup>
                                    </Marker>
                                )}
                            </MapContainer>
                        </CCol>
                    </CRow> : <LinearProgress />}
                </CContainer>
            </div>
        </>
    )
}

export default LiveTracking