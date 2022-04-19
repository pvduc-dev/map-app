import {useState} from "react";

interface WindowSize {
  width: number,
  height: number,
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0
  })

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }
  return windowSize;
}

export default useWindowSize();
