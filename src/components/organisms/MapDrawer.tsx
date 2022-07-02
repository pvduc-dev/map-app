import React, {FC, memo, useState} from 'react';
import VehicleStatusBox from "../molecules/VehicleStatusBox";
import VehicleListItem from "../molecules/VehicleListItem";
import {useSpring, animated} from "react-spring";
import { useNotifier } from 'react-headless-notifier';
import Cross from '../../assets/icons/cross.svg';

interface MapDrawerProps {
  isVisible?: boolean;
  onHide: Function,
}

const MapDrawer: FC<MapDrawerProps> = ({isVisible, onHide}) => {
  const { notify } = useNotifier();
  const styles = useSpring({
    config: {
      duration: 300
    },
    left: isVisible ? 0 : -442,
  });

  return (
    <animated.div
      style={styles}
      className="absolute z-30 w-full lg:w-[442px] h-full top-0 left-0 p-1.5"
    >
      <div className="h-full bg-[#0F0D1E] rounded-lg cursor-pointer">
        <div>
          <div className="px-4 pt-4 pb-2.5 font-medium ml-0.5 flex items-center text-gray-200">
            <span>Danh sách xe</span>
            <div
              className="ml-auto p-1"
              onClick={() => {onHide()}}
            >
              <Cross
                className="fill-gray-200"
                height={10}
                width={10}
              />
            </div>
          </div>
          <hr className="border-b border-gray-300 border-b border-0 border-black border-[#1D1A32]"/>
          <div className="grid grid-cols-3 gap-3 px-4 py-6">
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
