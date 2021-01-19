import ReactMapGl, { GeolocateControl } from 'react-map-gl'
import React, { useState } from 'react'
import Button from "@material-ui/core/Button"


function Map() {
  const [userposition, setUserposition] = useState({
    latitude: 0,
    longitude: 0,
  })

  const [viewport, setViewport] = useState({
    latitude: 6.2530408,
    longitude: -75.5645737,
    width: '50vw',
    height: '50vh',
    zoom: 10,
  })

  const mapRef = React.useRef(null)
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map
    console.log(mapRef)
  }, [])

  const locate = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserposition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      },
      () => null
    )
  }
  return (
    <div>
      <Button onClick={locate}>GeoLocate</Button>

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
          showUserLocation={true}
          onGeolocate={locate}
        />
      </ReactMapGl>
    </div>
  )
}

export default Map
