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
import SearchBox from "../components/molecules/SearchBox";
import {ajax} from "rxjs/ajax";
import {pluck} from "rxjs";

const place$ = (val: string) => ajax.get(`https://rsapi.goong.io/Place/Detail?place_id=${val}&api_key=y7ppbuJEqALDVJaIqWltfUODmc5xNgrvMFuhmB67`)


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
    setIsDrawerVisible(false);
  }

  function handleShowPanel() {
    setIsDrawerVisible(true)
  }

  function moveToLocation(item: any) {
    place$(item.place_id).pipe(
      pluck('response', 'result', 'geometry', 'location')
    ).subscribe(
      (next) => {
        console.log(next)
        map?.jumpTo({
          // @ts-ignore
          center: [next.lng, next.lat],
          zoom: 16,
        })
      }
    )
  }

  return (
    <>
      <div
        className="absolute w-10 h-10 top-4 left-4 z-20 bg-white rounded-full flex justify-center items-center cursor-pointer"
        onClick={handleShowPanel}
      >
      </div>
      {/*<SearchBox*/}
      {/*  moveToLocation={moveToLocation}*/}
      {/*/>*/}
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
