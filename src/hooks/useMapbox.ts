import {Map, MapOptions, StyleSpecification} from 'maplibre-gl';
import {MutableRefObject, RefObject, useEffect, useRef, useState} from "react";
import '../style/mapbox.css';

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
          // 'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i590320114!3m12!2svi!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!4e0',
          'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i590320114!3m17!2svi!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmd8cC5jOiNmZjI0MmYzZSxzLmU6bC50LmZ8cC5jOiNmZjc0Njg1NSxzLmU6bC50LnN8cC5jOiNmZjI0MmYzZSxzLnQ6MTl8cy5lOmwudC5mfHAuYzojZmZkNTk1NjMscy50OjJ8cy5lOmwudC5mfHAuYzojZmZkNTk1NjMscy50OjQwfHMuZTpnfHAuYzojZmYyNjNjM2Yscy50OjQwfHMuZTpsLnQuZnxwLmM6I2ZmNmI5YTc2LHMudDozfHMuZTpnfHAuYzojZmYzODQxNGUscy50OjN8cy5lOmcuc3xwLmM6I2ZmMjEyYTM3LHMudDozfHMuZTpsLnQuZnxwLmM6I2ZmOWNhNWIzLHMudDo0OXxzLmU6Z3xwLmM6I2ZmNzQ2ODU1LHMudDo0OXxzLmU6Zy5zfHAuYzojZmYxZjI4MzUscy50OjQ5fHMuZTpsLnQuZnxwLmM6I2ZmZjNkMTljLHMudDo0fHMuZTpnfHAuYzojZmYyZjM5NDgscy50OjY2fHMuZTpsLnQuZnxwLmM6I2ZmZDU5NTYzLHMudDo2fHMuZTpnfHAuYzojZmYxNzI2M2Mscy50OjZ8cy5lOmwudC5mfHAuYzojZmY1MTVjNmQscy50OjZ8cy5lOmwudC5zfHAuYzojZmYxNzI2M2M!4e0',
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
      zoom: 13,
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
