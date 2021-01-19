import ReactMapGl, {GeolocateControl } from "react-map-gl"
import React, { useState } from "react"

function Map() {

  const [userposition, setUserposition] = useState({
    latitude: 0,
    longitude: 0,
  })

  const [viewport, setViewport] = useState({
    latitude: 6.2530408,
    longitude: -75.5645737,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  })

  const mapRef = React.useRef(null)
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map
    console.log(mapRef)
  }, [])
  
  const locate = () =>{
      navigator.geolocation.getCurrentPosition((position)=>console.log(position),
      ()=>null)
  }
  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
        onLoad={onMapLoad}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserLocation={false} 
          onGeolocate={locate}
        />
      </ReactMapGl>
    </div>
  )
}


export default Map
