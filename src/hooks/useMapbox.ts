import {Map, MapOptions, StyleSpecification} from 'maplibre-gl';
import {RefObject, useEffect, useState} from "react";
import '../style/mapbox.css';

type useMapboxType = (
  ref: RefObject<HTMLDivElement>,
  options?: Partial<MapOptions>
) => Map | undefined;

/**
 * A custom hook for displaying a Mapbox map.
 * @param ref
 * @param options
 */
export const useMapbox: useMapboxType = (ref, options = {}) => {
  const [map, setMap] = useState<Map>();

  const defaultStyle: StyleSpecification = {
    version: 8,
    sources: {
      rasterTile: {
        type: 'raster',
        tiles: [
          'https://mt.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        ],
        tileSize: 256,
      }
    },
    layers: [
      {
        id: 'simple-tiles',
        type: 'raster',
        source: 'rasterTile',
        minzoom: 0,
        maxzoom: 24
      }
    ]
  };

  useEffect(() => {
    const container = ref.current;
    if (!(container instanceof HTMLDivElement)) {
      return;
    }
    if (map instanceof Map) {
      return;
    }
    setMap(new Map({
      container: container,
      style: defaultStyle,
      ...options,
    }))
  }, [])
  return map;
}
