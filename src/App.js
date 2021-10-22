import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MyURL = "https://geo.ipify.org/api/v2/country,city?apiKey=at_nSIqsffl0QJMdpOL8fMmHbdiHAFkW&ipAddress"
const URL =  "https://geo.ipify.org/api/v2/country,city?apiKey=at_nSIqsffl0QJMdpOL8fMmHbdiHAFkW&"


function App() {

  const [data, setData] = useState({})
  const [loading,setLoading] = useState(true)
  const [inputValue, setInputValue] = useState('')

 useEffect(() =>{
  axios
 .get(MyURL)
  .then(res => {
    setData(res.data)
    setLoading(false)
  })

  },[])
 
  const searchIp = () =>{
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(inputValue)&& inputValue !=='') {  
      setLoading(true)
      axios
    .get(URL + 'ipAddress=' +inputValue)
    .then(res =>{
      setData(res.data)
      setLoading(false)
      setInputValue('')
    })
    } 
    
  else if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(inputValue) && inputValue !==''){
    setLoading(true)
      axios
    .get(URL + 'domain=' +inputValue)
    .then(res =>{
      setData(res.data)
      setLoading(false)
      setInputValue('')
    })
  }
  else{
    setInputValue('')
    alert('Enter a valid IP address or Domain')
    
  }
}
  
  return (
    <div>
    <header>
      <div className = 'container'>
        <h1>IP Address Tracker</h1>
        <div className = 'input-box'>
          <input 
          type = 'text' 
          className = 'input' 
          placeholder = 'Search for an IP address or domain'
          onChange = {evt => setInputValue(evt.target.value)}/>
          <button className ='input-button' onClick = {searchIp}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/>
            </svg>
          </button>
        </div>
        <div className = 'infos'>
          <div>
            <h2>IP ADDRESS</h2>
            <span>{loading ? 'Ip' : data.ip}</span>
          </div>
          <div>
            <h2>LOCATION</h2>
            <span>{ loading ? 'Location' : `${data.location.city},${data.location.country} ${data.location.postalCode}`}</span>
          </div>
          <div>
            <h2>TIMEZONE</h2>
            <span>UTC { loading ? 'UTC -00:00' : data.location.timezone}</span>
          </div>
          <div>
            <h2>ISP</h2>
            <span>{loading ? 'ISP' : data.isp}</span>
          </div>
        </div>
      </div>
    </header>
    {!loading &&
    <MapContainer center={[data.location.lat,data.location.lng ]} zoom={13} scrollWheelZoom={true} zoomControl = {false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[data.location.lat,data.location.lng ]}>
        <Popup>
          {data.ip}
        </Popup>
      </Marker>
    </MapContainer>}
    </div>
  );
}

export default App;

