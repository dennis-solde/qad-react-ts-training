import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Views/Dashboard"
import Jobs from "./Views/Jobs"
import NotFound from "./Views/NotFound";

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path="/jobs"  element={<Jobs />} />        
      <Route path='*' element={<NotFound />}/>
    </Routes>
  );
}

export default routes