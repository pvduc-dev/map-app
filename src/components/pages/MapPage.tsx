import React, {memo, useState} from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
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
