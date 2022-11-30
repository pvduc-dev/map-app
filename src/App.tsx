import React, {FC} from 'react';
import AppRoutes from "@/routes";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MyQuery from '@/graphql/MyQuery.graphql';

console.log(MyQuery);

const App: FC = () => (
  <div
    className="relative w-screen h-screen flex flex-col overflow-hidden"
  >`
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/map"/>}/>
        <Route path="/map/*" element={<AppRoutes/>}/>
      </Routes>
    </BrowserRouter>
  </div>
)

export default App;
