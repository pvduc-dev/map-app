import {Map, MapOptions, StyleSpecification} from 'maplibre-gl';
import {RefObject, useEffect, useRef, useState} from "react";
import '../style/mapbox.css';
import { environment } from '../environment/environment.prod';

type useMapboxType = (
  ref: RefObject<HTMLDivElement>,
  options?: Partial<MapOptions>
) => RefObject<Map | undefined> | undefined;

/**
 * A custom hook for displaying a Mapbox map.
 * @param ref
 * @param options
 */
export const useMapbox: useMapboxType = (ref, options = {}) => {
  const map = useRef<Map>();
  const defaultStyle: StyleSpecification = {
    version: 8,
    sources: {
      rasterTile: {
        type: 'raster',
        tiles: [
          environment.baseMapTileUrl
        ],
        tileSize: 256,
      }
    },
    sprite: 'http://localhost:5001/sprite',
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
    if (!(container instanceof HTMLElement)) {
      throw Error('Map container isn\'t HTMLElement')
    }
    map.current = new Map({
      container: container,
      style: defaultStyle,
      center: [
        105.83112716674805,
        21.03608118311284
      ],
      zoom: 15,
      maxZoom: 18,
      pitchWithRotate: false,
      dragRotate: false,
      ...options,
    })
    return () => {
      map.current?.remove();
    }
  }, [])
  return map;
}
