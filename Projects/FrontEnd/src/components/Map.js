import ReactMapGl, { GeolocateControl, Marker} from 'react-map-gl'
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

  function createData(id, latitude, longitude) {
    return { id, latitude, longitude};
  }

  const ips = [
    createData(1, 6.2530408, -75.5645737),
    createData(2, 7.2530408, -75.5645737),
    createData(3, 8.2530408, -75.5645737),
    createData(4, 9.2530408, -75.5645737),
  ];

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

        {ips.map((ips) => (
          <Marker  key={ips.id} latitude={ips.latitude} longitude={ips.longitude} >
            <img src="/marker.png" alt="ips-marker"/>
          </Marker>
        ))}

      </ReactMapGl>
    </div>
  )
}

export default Map
