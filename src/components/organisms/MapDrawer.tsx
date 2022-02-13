import React, {FC, useState} from 'react';
import VehicleStatusBox from "../molecules/VehicleStatusBox";
import VehicleListItem from "../molecules/VehicleListItem";

interface MapDrawerProps {
  isVisible?: boolean;
}

const MapDrawer: FC<MapDrawerProps> = ({isVisible}) => {
  const [isShow, setIsShow] = useState<boolean>(true);

  function handleClick() {
    setIsShow(false)
  }

  return (
    <>
      {isShow && (
        <div
          className="absolute z-50 w-[420px] h-full top-0 left-0 p-1.5"
        >
          <div className="h-full bg-white rounded-lg p-4">
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
                <VehicleListItem/>
                <VehicleListItem/>
                <VehicleListItem/>
                <VehicleListItem/>
                <VehicleListItem/>
                <VehicleListItem/>
                <VehicleListItem/>
                <VehicleListItem/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MapDrawer;
