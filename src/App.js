import React from 'react';
import { RouterProvider, createHashRouter } from "react-router-dom";

import HomePage from './Component/HomePage';
import Business from './Component/Business';
import ServiceUs from './Component/ServiceUs';
import Contact from './Component/Contact';
import RootLayout from './Component/RootLayout';

const router = createHashRouter([
  {
    path: "/", element: <RootLayout />, children: [
      {index:true , element: <HomePage />},
      {path :"home" , element: <HomePage />},
      {path :"business" , element: <Business />},
      {path :"service" , element: <ServiceUs />},
      {path :"contact" , element: <Contact />},
      
    ],
  },
]);

function App() {
  return (<>

   <RouterProvider router={router} />
  </>
  );
}

export default App;
