import React, {FC, memo, useState} from 'react';
import VehicleStatusBox from "../molecules/VehicleStatusBox";
import VehicleListItem from "../molecules/VehicleListItem";
import Left from '../../assets/icons/left.svg';
import {useSpring, animated} from "react-spring";

interface MapDrawerProps {
  isVisible?: boolean;
  onHide: Function,
}

const MapDrawer: FC<MapDrawerProps> = ({isVisible, onHide}) => {
  const styles = useSpring({
    config: {
      duration: 300
    },
    left: isVisible ? 0 : -450,
  });

  return (
    <animated.div
      style={styles}
      className="absolute z-30 w-full lg:w-[420px] h-full top-0 left-0 p-1.5"
    >
      <div className="h-full bg-white rounded-lg p-4">
        <div
          onClick={() => {onHide()}}
          className="absolute right-[-6px] top-[212px] rounded-full bg-white p-0.5 cursor-pointer border-gray-400 border"
        >
          <Left
            fill="#333"
            width={18}
            height={18}
          />
        </div>
        <div>
          <p className="font-bold mb-4 ml-0.5">
            All (12 drivers)
          </p>
          <div className="grid grid-cols-3 gap-2">
            <VehicleStatusBox/>
            <VehicleStatusBox/>
            <VehicleStatusBox/>
            <VehicleStatusBox/>
            <VehicleStatusBox/>
            <VehicleStatusBox/>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-bold mb-4">
            Danh sách xe
          </p>
          <div className="w-full">
            <VehicleListItem/>
            <VehicleListItem/>
            <VehicleListItem/>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default MapDrawer;
