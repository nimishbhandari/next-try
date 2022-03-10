import { useState } from "react";
import Map from "react-map-gl";
export default function Map2() {
  return (
    <Map
      initialViewState={{
        latitude: 51.5074,
        longitude: -0.1278,
        zoom: 10
      }}
      style={{ width: '100vw', height: '100vh' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="pk.eyJ1IjoiYm5pbWlzaCIsImEiOiJjbDBra2d1bGgwMXVmM2NxbDhmZXdzZnFnIn0.2mAFTvsBGHc-j5SIeBGAeA"
    />
  );
}
