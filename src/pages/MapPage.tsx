import React, {memo, useEffect, useRef, useState} from 'react';
import {useMapbox} from "../hooks/useMapbox";
import MapDrawer from "../components/organisms/MapDrawer";
import {GeolocateControl, NavigationControl} from 'maplibre-gl';
import Left from '../assets/icons/left.svg';

const MapPage = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const map = useMapbox(mapContainerRef);

  useEffect(() => {
    map?.once('load', () => {
      map?.addControl(new GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: false,
      }), 'bottom-right')
    })
  })

  useEffect(() => {
    map?.once('load', () => {
      map?.addControl(new NavigationControl({
      }), 'bottom-right')
    })
  })

  function handleHidePanel() {
    debugger
    setIsDrawerVisible(false)
  }

  function handleShowPanel() {
    setIsDrawerVisible(true)
  }

  return (
    <div
      className="flex h-full relative"
    >
      <div
        className="absolute inline-block top-4 left-4 z-20"
      >
        <Left
          onClick={handleShowPanel}
          width={20}
          heigth={20}
        >
        </Left>
      </div>
      <MapDrawer
        isVisible={isDrawerVisible}
        onHide={handleHidePanel}
      />
      <div
        className="w-full h-full z-10"
        ref={mapContainerRef}
      />
    </div>
  )
};

export default MapPage;
