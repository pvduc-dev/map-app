import React, {FC, useEffect, useRef, useState} from 'react';
import Divider from "@/components/atoms/Divider";
import Draggable from 'react-draggable';
import {interval} from "rxjs";
import StatusLight from "@/components/atoms/StatusLight";

interface VehicleInfoCardProps {

}

const VehicleInfoCard: FC<VehicleInfoCardProps> = () => {
  const [nub, setNub] = useState(0);
  const draggableRef = useRef(null);

  useEffect(() => {
    const sub = interval(1000).subscribe((next) => {
      setNub(next)
    })
    return () => {
      sub.unsubscribe();
    }
  }, [])

  return (
    // @ts-ignore
    <Draggable
      positionOffset={{x: '-50%', y: '-50%'}}
      bounds={{
        top: -(window.innerHeight - 510) / 2,
        left: -(window.innerWidth - 460) / 2,
        right: (window.innerWidth - 460) / 2,
        bottom: (window.innerHeight - 512) / 2
      }}
      cancel='#content'
      nodeRef={draggableRef}
    >
      <div
        ref={draggableRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] bg-[#0F0D1E] z-40 rounded-md"
      >
        <div className="p-4 cursor-move">
          <div
            className="text-gray-100 font-medium"
          >
            Thông tin xe
          </div>
        </div>
        <Divider/>
        <div id="content" className="px-4 py-2 text-gray-200 text-sm h-96 overflow-y-auto">
          <div className="py-3 px-0.5 flex">
            <span>Lái xe</span>
            <span className="ml-auto">Phan Văn Đức</span>
          </div>
          <Divider/>
          <div className="py-3 px-0.5 flex">
            <span>Biển số</span>
            <span className="ml-auto">37E1-66394</span>
          </div>
          <Divider/>
          <div className="py-3 px-0.5 flex">
            <span>Số điện thoại</span>
            <span className="ml-auto">0865707906</span>
          </div>
          <Divider/>
          <div className="py-3 px-1 flex">
            <span>Cập nhật lần cuối cùng</span>
            <span className="ml-auto">5 phút trước</span>
          </div>
          <Divider/>
          <div className="py-3 px-1 flex">
            <span>Vận tốc</span>
            <span className="ml-auto">{nub}/60 (km/h)</span>
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
            <p>Trạng thái</p>
            <div
              className="ml-auto"
            >
              <StatusLight>Đang có khách</StatusLight>
            </div>
          </div>
          <Divider/>
          <div className="py-3 px-0.5 flex">
            <p>Trạng thái đồng hồ</p>
            <div
              className="ml-auto"
            >
              <StatusLight>Đang hoạt động</StatusLight>
            </div>
          </div>
          <Divider/>
          <div className="py-3 px-0.5 flex">
            <p>Điều hòa</p>
            <div
              className="ml-auto"
            >
              <StatusLight>Đang hoạt động</StatusLight>
            </div>
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
