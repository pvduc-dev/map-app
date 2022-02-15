import React, {FC} from 'react';
import Divider from "../atoms/Divider";
import Draggable from 'react-draggable';

interface VehicleInfoCardProps {

}

const VehicleInfoCard: FC<VehicleInfoCardProps> = () => {
  return (
    <Draggable
      positionOffset={{x: '-50%', y: '-50%'}}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] bg-[#0F0D1E] z-40 rounded-md"
      >
        <div className="p-4 text-gray-100 font-medium">
          Thông tin xe
        </div>
        <Divider/>
        <div className="px-4 py-2 text-gray-300 text-sm h-96 overflow-y-auto">
          <div className="py-3 px-0.5 flex">
            <span>Lái xe</span>
            <span className="ml-auto">Phan Văn Đức</span>
          </div>
          <Divider/>
          <div className="py-3 px-0.5 flex">
            <span>Số điện thoại</span>
            <span className="ml-auto">0865707906</span>
          </div>
          <Divider/>
          <div className="py-3 px-1 flex">
            <span>Cập nhật lần cuối</span>
            <span className="ml-auto">5 phút trước</span>
          </div>
          <Divider/>
          <div className="py-3 px-1 flex">
            <span>Vận tốc</span>
            <span className="ml-auto">33/60</span>
          </div>
          <Divider/>
          <div className="py-3 px-0.5 flex">
            <span>Thời gian lái xe trong ngày</span>
            <span className="ml-auto">0 phút</span>
          </div>
          <Divider/>
          <div className="py-3 px-0.5 flex">
            <span>Loại đồng hồ</span>
            <span className="ml-auto">KNA</span>
          </div>
          <Divider/>
          <div className="py-3 px-0.5 flex">
            <span>Loại xe</span>
            <span className="ml-auto">N/A</span>
          </div>
          <Divider/>
          <div className="py-3 px-0.5 flex">
            <span>Trạng thái</span>
            <span className="ml-auto flex items-center">
            <div
              className="h-2 w-2 mr-2 rounded-full bg-gray-500"
            />
            Tắt máy
          </span>
          </div>
          <Divider/>
          <div className="py-3 px-0.5 flex">
            <span>Trạng thái đồng hồ</span>
            <span className="ml-auto flex items-center">
            <div
              className="h-2 w-2 mr-2 rounded-full bg-gray-500"
            />
            Không có khách
          </span>
          </div>
          <Divider/>
          <div className="py-3 px-0.5 flex">
            <span>Điều hòa</span>
            <span className="ml-auto flex items-center">
            <div
              className="h-2 w-2 mr-2 rounded-full bg-gray-500"
            />
            Không hoạt động
          </span>
          </div>
          <Divider/>
          <div className="py-3 px-0.5 flex">
            <span>Âm lượng</span>
            <span className="ml-auto">7</span>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default VehicleInfoCard;