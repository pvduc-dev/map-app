import React, {FC} from 'react';

interface DividerProps {

}

const Divider: FC<DividerProps> = () => {
  return (
    <hr role="separator" className="border-b border-gray-300 border-b border-0 border-black border-[#1D1A32]"/>
  );
};

export default Divider;
