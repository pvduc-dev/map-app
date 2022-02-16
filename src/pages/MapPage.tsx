import React, {memo, useEffect, useRef, useState} from 'react';
import {useMapbox} from "../hooks/useMapbox";
import MapDrawer from "../components/organisms/MapDrawer";
import {GeolocateControl, NavigationControl} from 'maplibre-gl';
import Taxi from '../assets/icons/taxi.svg';
import { useNotifier } from 'react-headless-notifier';
import VehicleInfoCard from "../components/molecules/VehicleInfoCard";

const MapPage = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const map = useMapbox(mapContainerRef);

  map?.once('load', () => {
    setIsDrawerVisible(true)
    map?.addControl(new GeolocateControl({
    }), 'top-right');
  })

  function handleHidePanel() {
    setIsDrawerVisible(false)
  }

  function handleShowPanel() {
    setIsDrawerVisible(true)
  }

  return (
    <>
      <div
        className="absolute w-10 h-10 top-4 left-4 z-20 bg-white rounded-full flex justify-center items-center cursor-pointer"
        onClick={handleShowPanel}
      >
      </div>
      <div
        className="flex h-full"
      >
        <div
          className="w-full h-full z-0"
          ref={mapContainerRef}
        />
      </div>
      <MapDrawer
        isVisible={isDrawerVisible}
        onHide={handleHidePanel}
      />
      <VehicleInfoCard/>
    </>

  )
};

export default MapPage;
