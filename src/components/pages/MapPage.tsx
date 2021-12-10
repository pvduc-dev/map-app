import React, {FC, memo, useEffect, useState} from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {Product} from "../../models/product";
import {plainToClass} from "class-transformer";

interface UrlParams {
  latitude?: string;
  longitude?: string;
}

const MapPage = () => {
  useEffect(() => {
    console.log(plainToClass(Product, {
      firstName: 'Pv',
      lastName: 'Duc'
    }))
  })
  const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoicHZkdWMtZGV2IiwiYSI6ImNrOHlid2lkdDFnZnUzam52cGFwOHBqcGMifQ.PFeqdmk4RuusDS3GruLvEA",
    logoPosition: 'top-left'
  })
  return (
    <Map
      style="mapbox://styles/mapbox/dark-v9"
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
