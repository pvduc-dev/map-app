import React, {memo, MutableRefObject, useEffect, useRef} from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import {Map as Mapbox} from 'maplibre-gl';

interface UrlParams {
  latitude?: string;
  longitude?: string;
}

const MapPage = () => {
  const map = useRef<Mapbox>(null) as MutableRefObject<Mapbox>;
  const mapContainer = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    try {
      map.current = new Mapbox({
        container: mapContainer.current as HTMLDivElement,
        style: {
          'version': 8,
          'sources': {
            'raster-tiles': {
              'type': 'raster',
              'tiles': [
                'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
              ],
              'tileSize': 256,
            }
          },
          'layers': [
            {
              'id': 'simple-tiles',
              'type': 'raster',
              'source': 'raster-tiles',
              'minzoom': 0,
              'maxzoom': 24
            }
          ]
        },
        zoom: 12,
        center: [
          105.84241390228271,
          21.01112468403104
        ]
      })
    } catch (e) {
      console.log(e)
    }
  }, []);
  return (
    <div style={{width: '100%', height: '100%'}} ref={mapContainer}/>
  )
};

export default memo(MapPage);
