import React from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
// @ts-ignore
import maplibregl from '!maplibre-gl';
import Map from "react-map-gl";
import {environment} from '@/environment/environment';

const MapPageV2 = () => {
  return (
    <Map
      reuseMaps
      mapLib={maplibregl}
      mapStyle={environment.mapTileUrl}
      initialViewState={{
        longitude: 105.86288452148436,
        latitude: 21.016573008161775,
        zoom: 9
      }}
    >
    </Map>
  );
};

export default MapPageV2;
