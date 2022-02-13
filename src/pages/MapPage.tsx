import React, {memo, useEffect, useRef} from 'react';
import {useMapbox} from "../hooks/useMapbox";
import MapDrawer from "../components/organisms/MapDrawer";

const MapPage = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const map = useMapbox(mapContainerRef);
  useEffect(() => {
  })
  return (
    <div
      className="flex h-full relative"
    >
      <MapDrawer
        isVisible
      />
      <div
        className="w-full h-full z-10"
        ref={mapContainerRef}
      />
    </div>
  )
};

export default memo(MapPage);
