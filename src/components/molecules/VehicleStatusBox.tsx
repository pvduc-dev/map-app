import React, {FC} from 'react';
import ContentLoader from "react-content-loader";

interface VehicleStatusBoxProps {
  isLoading?: boolean;
}

const VehicleStatusBox: FC<VehicleStatusBoxProps> = ({isLoading}) => {
  return (
    <>
      {isLoading ? (
        <div className="w-full border rounded-md px-2 py-1 text-sm font-medium">
          <div className="flex items-center">
            <div>
              <div>Online</div>
              <div className="text-lg font-black">20</div>
            </div>
            <div className="ml-auto h-[40px] w-[40px] rounded-full bg-[#FFE2D9]">
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full border border-[#65617C] rounded-md px-2 py-1 text-sm font-medium cursor-progress">
          <ContentLoader
            title=""
            speed={3}
            width={107}
            height={54}
            viewBox="0 0 107 54"
            backgroundColor="#65617C"
            foregroundColor="#0F0D1E"
          >
            <rect x="2" y="8" rx="6" ry="6" width="46" height="12" />
            <circle cx="82" cy="28" r="20" />
            <circle cx="12" cy="36" r="10" />
          </ContentLoader>
        </div>
      )}
    </>
  );
};

export default VehicleStatusBox;
