import React, {useState} from 'react';
import ReactMapGL, {
  AttributionControl,
  FullscreenControl,
  Marker,
  NavigationControl,
  ViewportProps,
  ViewState,
  CanvasOverlay, GeolocateControl
} from 'react-map-gl';

const MapPage = () => {
  const mapboxAccessToken = 'pk.eyJ1IjoicHZkdWMtZGV2IiwiYSI6ImNrOHlid2lkdDFnZnUzam52cGFwOHBqcGMifQ.PFeqdmk4RuusDS3GruLvEA';

  const [viewport, setViewport] = useState<ViewportProps>({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  const viewportChangeHandler = (viewport: ViewportProps) => {
    setViewport(viewport)
  }

  const fullscreenControlStyle = {
    right: 10,
    top: 10,
  };
  return (
    <div
      style={
        {width: '100vw', height: '100vh'}
      }
    >
      <ReactMapGL
        {...viewport}
        mapStyle={'mapbox://styles/mapbox/light-v10'}
        width="100%"
        height="100%"
        mapboxApiAccessToken={mapboxAccessToken}
        onViewportChange={viewportChangeHandler}
      >
        <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
        </Marker>
        <NavigationControl
          style={{top: 50, right: 10}}
        />
        <FullscreenControl
          style={{top: 10, right: 10}}
        >
          test
        </FullscreenControl>
        <GeolocateControl
          style={{bottom: 28, right: 10}}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
          auto
        />
      </ReactMapGL>
    </div>
  );
};

export default MapPage;
