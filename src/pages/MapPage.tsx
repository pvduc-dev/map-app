import React, {memo, useEffect, useRef, useState} from 'react';
import {useMapbox} from "../hooks/useMapbox";
import MapDrawer from "../components/organisms/MapDrawer";
import {GeolocateControl, NavigationControl} from 'maplibre-gl';
import Taxi from '../assets/icons/taxi.svg';
import {useNotifier} from 'react-headless-notifier';
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
    })

  }, [])

  useEffect(() => {
    const size = 50;

// This implements `StyleImageInterface`
// to draw a pulsing dot icon on the map.
    const pulsingDot = {
      width: size,
      height: size,
      data: new Uint8Array(size * size * 4),

// When the layer is added to the map,
// get the rendering context for the map canvas.
      onAdd: function () {
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        // @ts-ignore
        this.context = canvas.getContext('2d');
      },

// Call once before every frame where the icon will be used.
      render: function () {
        const duration = 1000;
        const t = (performance.now() % duration) / duration;

        const radius = (size / 2) * 0.3;
        const outerRadius = (size / 2) * 0.7 * t + radius;
        // @ts-ignore
        const context = this.context;

// Draw the outer circle.
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          outerRadius,
          0,
          Math.PI * 2
        );
        context.fillStyle = `rgba(0, 191, 255, ${1 - t})`;
        context.fill();

// Draw the inner circle.
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          radius,
          0,
          Math.PI * 2
        );
        context.fillStyle = 'rgba(0, 191, 255, 1)';
        context.strokeStyle = 'white';
        context.lineWidth = 2 + (1 - t);
        context.fill();
        context.stroke();

// Update this image's data with data from the canvas.
        this.data = context.getImageData(
          0,
          0,
          this.width,
          this.height
        ).data;

// Continuously repaint the map, resulting
// in the smooth animation of the dot.
        map?.current?.triggerRepaint();

// Return `true` to let the map know that the image was updated.
        return true;
      }
    };
    map?.current?.on('load', () => {
      map?.current?.addImage('pulsing-dot', pulsingDot, {pixelRatio: 2})
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
              105.83118736674805,
              21.03608118311284
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
          "icon-size": 2.8,
          'icon-rotate': 342
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
        className="w-80 right-2 top-1.5 rounded-md absolute z-50 h-11 bg-[#0F0D1E]"
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
      {/*<VehicleInfoCard/>*/}
    </>

  )
};

export default memo(MapPage);
