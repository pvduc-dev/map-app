import React, {FC, memo, useState} from 'react';
import VehicleStatusBox from "../molecules/VehicleStatusBox";
import VehicleListItem from "../molecules/VehicleListItem";
import Left from '../../assets/icons/left.svg';
import {useSpring, animated} from "react-spring";
import { useNotifier } from 'react-headless-notifier';
import SuccessNotification from "./SuccessNotification";
import Cross from '../../assets/icons/cross.svg';

interface MapDrawerProps {
  isVisible?: boolean;
  onHide: Function,
}

const MapDrawer: FC<MapDrawerProps> = ({isVisible, onHide}) => {
  const { notify } = useNotifier();
  const styles = useSpring({
    config: {
      duration: 200
    },
    left: isVisible ? 0 : -450,
  });

  return (
    <animated.div
      style={styles}
      className="absolute z-30 w-full lg:w-[442px] h-full top-0 left-0 p-1.5"
    >
      <div className="h-full bg-white rounded-lg cursor-pointer">
        <div>
          <div className="px-4 pt-4 pb-2.5 font-medium ml-0.5 flex items-center">
            <span>Danh sách xe</span>
            <div
              className="ml-auto p-1"
              onClick={() => {onHide()}}
            >
              <Cross
                height={10}
                width={10}
              />
            </div>
          </div>
          <hr className="border-b border-gray-300 border-b border-0 border-black border-opacity-10"/>
          <div className="grid grid-cols-3 gap-3 px-4 py-3">
            <VehicleStatusBox/>
            <VehicleStatusBox/>
            <VehicleStatusBox/>
            <VehicleStatusBox/>
            <VehicleStatusBox/>
            <VehicleStatusBox/>
          </div>
        </div>
        <div className="mx-4 my-3">
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
