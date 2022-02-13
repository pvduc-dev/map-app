import React, {FC} from 'react';
import ContentLoader from "react-content-loader";

interface VehicleListItemProps {

}

const VehicleListItem: FC<VehicleListItemProps> = () => {
  return (
    <div className="w-full">
      <ContentLoader
        speed={4}
        width={394}
        height={62}
        viewBox="0 0 394 62"
        backgroundColor="#f3f3f3"
        foregroundColor="#e3e3e3"
      >
        <circle cx="22" cy="22" r="22" />
        <rect x="54" y="4" rx="6" ry="6" width="160" height="12" />
        <rect x="54" y="24" rx="6" ry="6" width="120" height="12" />
      </ContentLoader>
    </div>
  );
};

export default VehicleListItem;
