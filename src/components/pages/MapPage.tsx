import React, {memo, useEffect, useState} from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface UrlParams {
  latitude?: string;
  longitude?: string;
}

const MapPage = () => {
  const Map = ReactMapboxGl({
    accessToken: process.env.MAPBOX_ACCESS_TOKEN as string,
    logoPosition: 'top-left'
  })
  return (
    <Map
      style="mapbox://styles/mapbox/light-v9"
      containerStyle={{
        height: '100%',
        width: '100%'
      }}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Map>
  )
};

export default memo(MapPage);
