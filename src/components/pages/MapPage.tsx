import React, {memo, useState, Suspense} from 'react';
import ReactMapboxGl, {Layer, Feature, Popup} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface UrlParams {
  latitude?: string;
  longitude?: string;
}

const MapPage = () => {
  const mapboxAccessToken = 'pk.eyJ1IjoicHZkdWMtZGV2IiwiYSI6ImNrOHlid2lkdDFnZnUzam52cGFwOHBqcGMifQ.PFeqdmk4RuusDS3GruLvEA';
  const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoicHZkdWMtZGV2IiwiYSI6ImNrOHlid2lkdDFnZnUzam52cGFwOHBqcGMifQ.PFeqdmk4RuusDS3GruLvEA",
    logoPosition: 'top-left'
  })
  return (
    <>
      <Map
        style="mapbox://styles/mapbox/light-v9"
        center={[105.83977460861206, 20.984921876135513]}
        zoom={[12]}
        containerStyle={{
          height: '100%',
          width: '100%'
        }}
      >
      </Map>
    </>
  )
};

export default memo(MapPage);
