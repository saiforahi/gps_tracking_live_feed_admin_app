import { CContainer, CRow } from '@coreui/react'
import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './leafletStyles.css'
import { PUBLIC_API } from 'src/config';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const LiveTracking = () => {
    const position = [51.505, -0.09]
    const [devices,setDevices] = useState([])
    const [count,setCount] = useState(0)
    React.useEffect(()=>{
        const interval = setInterval(() => {
            PUBLIC_API.get('device/data/last/').then((res)=>{
                console.log('response',res.data)
                setDevices(res.data.data)
                console.log('lat : ',parseFloat(res.data.data[0].lat))
            })
          }, 1000);
        return () => clearInterval(interval);
    },[])
    return (
        <>
            {devices.length>0 && <CContainer>
                <CRow>
                    <div>
                    <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {devices.length>0 && Array.from(devices).map((device,idx)=>
                            <Marker id={idx} position={[Number(device.lat),Number(device.lng)]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                                <Popup>
                                    Device ID : {device.device__device_id}<br/>Battery: {device.battery}. <br /> signal_strength1 : {device.signal_strength1} <br/> signal_strength2: {device.signal_strength2}<br/> speed : {device.speed}
                                </Popup>
                            </Marker>
                        )}
                    </MapContainer>
                    </div>
                </CRow>
            </CContainer>}
        </>
    )
}

export default LiveTracking