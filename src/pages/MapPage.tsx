import React, {memo, useEffect, useRef} from 'react';
import {useMapbox} from "../hooks/useMapbox";
import '../style/index.css';

const MapPage = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const map = useMapbox(mapContainerRef);
  useEffect(() => {
  })
  return (
    <div
      style={{width: '100%', height: '100%'}}
      ref={mapContainerRef}
    />
  )
};

export default memo(MapPage);
