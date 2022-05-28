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
import {interval, pluck, map as rxMap} from "rxjs";
import transformTranslate from "@turf/transform-translate";
import {round} from "@turf/helpers";
import {getCoord} from "@turf/invariant";

const place$ = (val: string) => ajax.get(`https://rsapi.goong.io/Place/Detail?place_id=${val}&api_key=y7ppbuJEqALDVJaIqWltfUODmc5xNgrvMFuhmB67`)


const MapPage = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const map = useMapbox(mapContainerRef);

  useEffect(() => {
    map?.current?.once('load', () => {
      setIsDrawerVisible(true)
      setIsSearchBoxVisible(true)
      map?.current?.addControl(new GeolocateControl({
      }), 'top-right');
    })
  }, [])

  useEffect(() => {
    const point = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              105.7710242,
              21.01008306
            ]
          }
        }
      ]
    }
    map?.current?.on('load', () => {
      map?.current?.addSource('gps', {
        type: 'geojson',
        data: point
      })?.addLayer({
        id: 'gps',
        type: 'symbol',
        source: 'gps',
        layout: {
          'icon-image': 'car-1',
          "icon-size": 2.6,
        }
      });
    })
  }, [])

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
        setIsSearchBoxVisible(false)
        map?.current?.jumpTo({
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
      {/*  isVisible={isSearchBoxVisible}*/}
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

export default memo(MapPage);
