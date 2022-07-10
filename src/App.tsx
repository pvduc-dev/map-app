import React, {FC} from 'react';
import AppRoutes from "@/routes";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

const App: FC = () => (
  <div
    className="relative w-full h-screen overflow-x-hidden"
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/map"/>}/>
        <Route path="/map/*" element={<AppRoutes/>}/>
      </Routes>
    </BrowserRouter>
  </div>
)

export default App;
