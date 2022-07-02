import {Map, MapOptions, StyleSpecification} from 'maplibre-gl';
import {RefObject, useEffect, useRef, useState} from "react";
import '../style/mapbox.css';
import { environment } from '../environment/environment';

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
  const defaultStyle: string = 'https://tiles.pvduc.dev/dark.json';

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
      hash: true,
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
