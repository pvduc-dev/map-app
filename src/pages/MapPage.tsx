import React, {memo, useEffect, useRef, useState} from 'react';
import {useMapbox} from "../hooks/useMapbox";
import MapDrawer from "../components/organisms/MapDrawer";
import {GeolocateControl, NavigationControl} from 'maplibre-gl';
import Taxi from '../assets/icons/taxi.svg';
import { useNotifier } from 'react-headless-notifier';

const MapPage = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const map = useMapbox(mapContainerRef);

  const { notify, dismissAll } = useNotifier();

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
        <Taxi width={18} height={18}/>
      </div>
      <div
        className="absolute bottom-4 mx-auto left-1/2 -translate-x-1/2 bg-white z-20 rounded-md px-3 py-4 flex"
      >
        <div
          className="flex flex-col items-center mx-4"
        >
          <Taxi
            fill="#445CF9"
            width={24}
            height={24}
          />
        </div>
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
    </>

  )
};

export default MapPage;
