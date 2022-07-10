import React, {FC, PropsWithChildren} from 'react';

interface StatusLightProps {

}

const StatusLight: FC<PropsWithChildren<StatusLightProps>> = ({children}) => {
  return (
    <div
      className="before:content-[''] before:mr-2 before:inline-block before:w-2 before:h-2 before:bg-green-500 before:rounded-full"
    >
      {children}
    </div>
  );
};

export default StatusLight;
