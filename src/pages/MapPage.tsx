import React, {memo, useEffect, useRef, useState} from 'react';
import {useMapbox} from "../hooks/useMapbox";
import MapDrawer from "../components/organisms/MapDrawer";
import {GeolocateControl, NavigationControl} from 'maplibre-gl';
import Taxi from '../assets/icons/taxi.svg';
import { useNotifier } from 'react-headless-notifier';
import VehicleInfoCard from "../components/molecules/VehicleInfoCard";
import Divider from "../components/atoms/Divider";
import Location from '../assets/icons/location.svg';
import Search from '../assets/icons/search.svg';

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
        className="absolute w-[32rem] rounded-md h-[26.8rem] top-1/3 left-1/2 -translate-x-1/3 -translate-y-1/2 z-50 bg-[#0F0D1E] py-4"
      >
        <div
          className="mb-3 relative"
        >
          <Search
            class="absolute fill-gray-400 top-1 left-5"
            width={16}
            height={16}
          />
          <input className="text-sm outline-none bg-transparent text-gray-200 mx-12" placeholder="Tìm kiếm địa điểm..." type="text"/>
        </div>
        <Divider/>
        <div
          className="relative text-gray-400 p-4 text-sm"
        >
          <Location
            class="absolute fill-gray-400 top-4 left-5"
            width={16}
            height={16}
          />
          <p className="ml-8">Đường giải phóng</p>
        </div>
        <Divider/>
        <div
          className="relative text-gray-400 p-4 text-sm"
        >
          <Location
            class="absolute fill-gray-400 top-4 left-5"
            width={16}
            height={16}
          />
          <p className="ml-8">Đường giải phóng</p>
        </div>
        <Divider/>
        <div
          className="relative text-gray-400 p-4 text-sm"
        >
          <Location
            class="absolute fill-gray-400 top-4 left-5"
            width={16}
            height={16}
          />
          <p className="ml-8">Đường giải phóng</p>
        </div>
        <Divider/>
        <div
          className="relative text-gray-400 p-4 text-sm"
        >
          <Location
            class="absolute fill-gray-400 top-4 left-5"
            width={16}
            height={16}
          />
          <p className="ml-8">Đường giải phóng</p>
        </div>
        <Divider/>
        <div
          className="relative text-gray-400 p-4 text-sm"
        >
          <Location
            class="absolute fill-gray-400 top-4 left-5"
            width={16}
            height={16}
          />
          <p className="ml-8">Đường giải phóng</p>
        </div>
        <Divider/>
        <div
          className="relative text-gray-400 p-4 text-sm"
        >
          <Location
            class="absolute fill-gray-400 top-4 left-5"
            width={16}
            height={16}
          />
          <p className="ml-8">Đường giải phóng</p>
        </div>
        <Divider/>
        <div
          className="relative text-gray-400 p-4 text-sm"
        >
          <Location
            class="absolute fill-gray-400 top-4 left-5"
            width={16}
            height={16}
          />
          <p className="ml-8">Đường giải phóng</p>
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
      {/*<VehicleInfoCard/>*/}
    </>

  )
};

export default MapPage;
