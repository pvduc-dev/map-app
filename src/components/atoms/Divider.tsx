import React, {FC} from 'react';

interface DividerProps {

}

const Divider: FC<DividerProps> = () => {
  return (
    <hr role="separator" className=""/>
  );
};

export default Divider;
